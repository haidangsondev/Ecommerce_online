import userModel from "../models/user.model.js";

export const checkEmail = async (email) => {
  return await userModel.findOne({ email });
};
