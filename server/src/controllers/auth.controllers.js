import asyncHandler from "express-async-handler";
import { checkEmail } from "../services/auth.services.js";
import uniqid from "uniqid";
import { sendEmail } from "../utils/sendEmail.js";
export const register = asyncHandler(async (req, res, next) => {
  const { email } = req.body;

  const Email = await checkEmail(email);
  if (Email) {
    throw new Error("Email đã tồn tại");
  }

  // Tạo registerToken để lưu vào cookie
  const registerToken = uniqid();
  res.cookie(
    "data_register",
    {
      ...req.body,
      registerToken,
    },
    // Hạn sử dụng của cookie là 15 phút
    { maxAge: 15 * 60 * 1000, httpOnly: true }
  );

  const html = `Đây là mã để bạn xác thực tài khoản email và hiệu lực là 15 phút. Mã<b>  ${registerToken}</b>`;
  const subject = "Xác thực tài khoản";
  const data = {
    email,
    subject,
    html,
  };

  // Gửi email để xác thực người dùng
  await sendEmail(data);
  //   const cookie = req.cookies?.data_register;

  return res.status(200).json({
    success: true,
    message: "Kiểm tra email để xác thực tài khoản đã đăng ký",
  });
});
