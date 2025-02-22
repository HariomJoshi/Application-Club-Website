import mongoose, {Document, Model} from "mongoose";
import validator from "validator";
import bcryptjs from "bcryptjs";

interface IUser extends Document {
    email: string;
    name: string;
    password: string;
    passwordConfirm?: string;
    passwordChangedAt?: number;

    correctPassword(candidatePassword: string, userPassword: string): Promise<boolean>;

    changePasswordAfter(JWTTimeStamp: number): boolean;
}

const userSchema = new mongoose.Schema<IUser>({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, "Email is must!"],
        validate: [validator.isEmail, "Please provide a valid email!"],
    },
    name: {
        type: String,
        required: [true, "A user must have a name"],
        minLength: [5, "name too short(min=5)!"],
        maxLength: [15, "name too long(max=25)!"],
    },
    password: {
        type: String,
        required: [true, "Please create a password!"],
        minlength: 8,
        select: false,
    },
    passwordConfirm: {
        type: String,
        required: [true, "Please confirm the password!"],
        validate: {
            validator: function (this: IUser, el: string) {
                return el === this.password;
            },
            message: "Passwords are not the same!",
        },
    },
    passwordChangedAt: {
        type: Number,
        required: false,
    },
});

userSchema.pre<IUser>("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcryptjs.hash(this.password, 12);
    this.passwordConfirm = undefined;
    next();
});

userSchema.methods.correctPassword = async function (
    candidatePassword: string,
    userPassword: string
) {
    return bcryptjs.compare(candidatePassword, userPassword);
};

userSchema.methods.changePasswordAfter = function (JWTTimeStamp: number) {
    if (this.passwordChangedAt) {
        const changedTimestamp = Math.floor(this.passwordChangedAt / 1000);
        return JWTTimeStamp < changedTimestamp;
    }
    return false;
};

userSchema.pre<IUser>("save", function (next) {
    if (!this.isModified("password") || this.isNew) return next();
    this.passwordChangedAt = Date.now() - 10000;
    next();
});

const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);
export default User;
