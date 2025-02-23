import catchAsync from "../util/catchAsync";
import jwt, {JwtPayload} from "jsonwebtoken";
import AppError from "../util/appError";
import User from "../model/UserModel";
import {Request, Response, NextFunction} from "express";
import {IUser} from "../model/UserModel";
import {sendEmail} from "../util/email";
import {RequestWithUser} from "../types";

//returns a jwt token created using given id
const signToken = (id: any) => {
    return jwt.sign({id: id}, process.env.JWT_SECRET);
};

//creates a jwt token using user's _id, put it into a cookie and send it as response
const createSendToken = (user: IUser, status: number, res: Response) => {
    const token = signToken(user._id);

    user.password = undefined;
    user.leetcode = undefined;

    //set cookies
    const options =
        process.env.NODE_ENV === "development"
            ? {
                expires: new Date(Date.now() + Number(process.env.COOKIE_EXPIRY_DAYS) * 24 * 60 * 60 * 1000),
                httpOnly: true,
                secure: false,
            }
            : {
                expires: new Date(Date.now() + Number(process.env.COOKIE_EXPIRY_DAYS) * 24 * 60 * 60 * 1000),
                httpOnly: true,
                secure: true,
                domain: process.env.FRONTEND_DOMAIN,
            };

    res.cookie("jwt", token, options);

    res.status(status).json({
        status: "success",
        user,
    });
};


//to sing up the user
const signup = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const username: string = req.body.username;
    const email: string = req.body.email;
    const name: string = req.body.name;
    const phone: number = req.body.phone;
    const password: string = req.body.password;

    if (!(username && email && name && phone && password)) return next(new AppError("Provide all fields!", 400));

    // check if the user already exists
    const existingUser = await User.findOne({
        $or: [{username}, {email}]
    });
    if (existingUser)
        if (existingUser.verified) return next(new AppError("User already exists", 401));
        else await User.deleteOne({_id: existingUser._id});

    const otp = Math.floor(10000 + Math.random() * 90000);

    await User.create({
        username,
        name,
        email,
        phone,
        password,
        otp
    });

    await sendEmail({
        email: email,
        subject: "Here is your OTP for email verification",
        html: `Yout OTP is <br/> ${otp} <br/> Valid only for 10 minutes.`,
    });

    res.status(201).json({
        status: "success",
        message: "Unverified user created!",
        email: email,
    });
});

const verifyEmail = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    //todo: protect against bruteforce attacks
    const email = req.body.email;
    const otp = req.body.otp;

    const user = await User.findOne({email: email}).select("-leetcode -password +otp");
    console.log(user)
    if (!user) return next(new AppError("No user with this email id!", 401));
    if (user.verified) return next(new AppError("User is already verified!", 401));

    console.log(user.otp === otp);

    if (user.otp && otp && user.otp === otp) {
        user.verified = true;
        user.otp = undefined;
        await user.save();
        createSendToken(user, 201, res);
        return;
    } else {
        return next(new AppError("OTP mismatch!", 401));
    }
});


//makes sure that user is logged in == has a valid bearer token
//if all is good, that user is added to the req
//this protection does not require all coding profiles to be verified
const shallowProtect = catchAsync(async (req: RequestWithUser, res: Response, next: NextFunction) => {
    let token = req.cookies.jwt;

    if (!token)
        return next(new AppError("You are not logged in! Please log in again.", 401));

    // verify the token
    //verify also accepts a callback function, but we will make it return a promise
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;

    // check if user still exists => to check the case if user has jwt token but the user was deleted!
    const freshUser = await User.findOne({_id: decoded.id});
    if (!freshUser)
        return next(new AppError("The user belonging to this token does not exist.", 401));

    // check if user changed password after jwt was issued
    if (freshUser.changePasswordAfter(decoded.iat))
        return next(new AppError("User recently changed their password! Please login again.", 401));

    //grant access to the protected rout
    //also add this user to the request object
    req.user = freshUser;
    next();
});

const protect = [shallowProtect, catchAsync(async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const user = req.user;

    if (!user.leetcode.username || !user.leetcode.verified) {
        res.status(400).json({
            status: "fail",
            message: "You need to verify all coding platforms to access this feature",
            redirectionUrl: "/setting/verifyProfiles"
        });
    }

    next();
})];


// login: catchAsync(async (req, res, next) => {
//     let {email, password} = req.body;
//
//     //check if email and password exists => user entered these fields
//     if (!email || !password) {
//         return next(new AppError("Please provide email and password", 400));
//     }
//
//     //check if user exists and password is correct
//     //we have restricted the default selection of password, so we explicitly select password
//     let user = await User.findOne({email: email}).select("+password");
//     if (!user || !(await user.correctPassword(password, user.password)))
//         return next(new AppError("Incorrect email or password!", 401));
//
//     createSendToken(user, 200, res);
// }),
//
// logout: catchAsync(async (req, res, next) => {
//     const options =
//         process.env.NODE_ENV === "development"
//             ? {
//                 expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
//                 httpOnly: true,
//                 secure: false,
//             }
//             : {
//                 expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
//                 secure: true,
//                 domain: process.env.DOMAIN,
//             };
//     res.cookie("jwt", "", options).json({
//         status: "success",
//         message: "cookie deleted",
//     });
// }),


//functionality to update/reset password is not implemented

export default {
    signup,
    verifyEmail,
    protect,
    shallowProtect,
};
