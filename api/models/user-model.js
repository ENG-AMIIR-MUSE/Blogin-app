import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
// add timestamps true    so to track the time that ueer created and to sort easily
export const userModel  = mongoose.model("User",userSchema)