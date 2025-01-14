import mongoose from "mongoose";
import validator from "validator";
import crypto from "crypto";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 5,
      trim: true,
    },
    email: {
      type: String,
      validate: validator.isEmail,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    address: {
      type: String,
      maxlength: 256,
    },
    phone: {
      type: String,
      minlength: 10,
    },
    avatar: {
      type: String,
    },
    cart: [
      {
        product: { type: mongoose.Types.ObjectId, ref: "Product" },
        //   color: String,
        //   quantity: Number,
        //   price: Number,
        //   thumb: String,
        //   title: String,
      },
    ],
    wishlist: [{ type: mongoose.Types.ObjectId, ref: "Product" }],
    emailToken: {
      type: String,
      default: null,
    },
    passwordResetToken: {
      type: String,
      default: null,
    },
    isVerify: {
      type: Boolean,
      default: false,
    },

    avatar: {
      type: String,
      default: "",
    },
    refreshToken: {
      type: String,
      default: "",
    },
    passwordChangeAt: {
      type: String,
      default: "",
    },
    passwordResetExpires: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      enum: ["admin", "user", "librarian"],
      default: "user",
    },
  },
  { timestamps: true }
);
userSchema.methods = {
  createPasswordToken: async function () {
    const passwordToken = crypto.randomBytes(32).toString("hex");
    this.passwordResetToken = crypto
      .createHash("sha256")
      .update(passwordToken)
      .digest("hex");
    this.passwordResetExpires = Date.now() + 15 * 60 * 1000;
    return passwordToken;
  },
};
const User = mongoose.model("User", userSchema);

export default User;
