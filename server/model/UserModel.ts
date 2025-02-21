import mongoose, {Document} from "mongoose";
import validator from "validator";
import bcryptjs from "bcryptjs";

export interface ISubmission {
    questionId: string;
    timestamp: Date;
}

export interface IPlatformSubmissions {
    username: string;
    submissions: ISubmission[];
    verified: boolean;
    randomName?: string;
}

export interface IUser extends Document {
    username: string;
    name: string;
    email: string;
    phone: number;
    password: string;
    leetcode: IPlatformSubmissions;
    gfg: IPlatformSubmissions;
    otp?: number;
    passwordChangedAt?: number;
    verified: boolean;
    createdAt: Date;
    updatedAt: Date;

    correctPassword(candidatePassword: string, userPassword: string): Promise<boolean>;

    changePasswordAfter(JWTTimeStamp: number): boolean;
}

const userSchema = new mongoose.Schema<IUser>({
    username: {
        type: String,
        unique: true,
        required: [true, "username not provided"],
        minlength: [3, "username must be at least 3 characters long"],
        maxlength: [15, "username must be at max 15 characters long"],
        validate: {
            validator: function (value: string) {
                return /^[a-zA-Z0-9_]+$/.test(value);
            },
            message: "username can only contain alphabets, numbers, and underscores!",
        },
    },
    name: {
        type: String,
        required: [true, "A user must have a name"],
        minLength: [5, "name too short(min=5)!"],
        maxLength: [15, "name too long(max=25)!"],
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, "Email is required!"],
        validate: [
            validator.isEmail,
            {
                validator: function (value: string) {
                    return value.endsWith("@mnnit.ac.in");
                },
                message: "Please enter MNNIT GSit id.",
            }]
    }, phone: {
        type: Number,
        required: true,
    }, leetcode: {
        username: {type: String, unique: true},
        submissions: {
            type: [
                {
                    questionId: {type: String, required: true},
                    timestamp: {type: Date, required: true},
                },
            ],
            default: [],
        }, verified: {
            type: Boolean,
            default: false,
        }, randomName: {
            type: String,
        }
    }, gfg: {
        username: {type: String, unique: true},
        submissions: {
            type: [
                {
                    questionId: {type: String, required: true},
                    timestamp: {type: Date, required: true},
                },
            ],
            default: [],
        }, verified: {
            type: Boolean,
            default: false,
        }, randomName: {
            type: String,
        }
    },
    password: {
        type: String,
        required: [true, "Please create a password!"],
        minlength: [8, "password must be at least 8 characters long"],
        select: false,
    }, passwordChangedAt: {
        type: Number,
        required: false,
    }, otp: {
        type: Number,
        select: false,
        required: false,
    }, verified: {
        type: Boolean,
        required: true,
        default: false,
    }
}, {
    timestamps: true,
});

userSchema.pre<IUser>("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcryptjs.hash(this.password, 12);
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

const User = mongoose.model<IUser>("User", userSchema);
export default User;