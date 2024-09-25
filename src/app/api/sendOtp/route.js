import dbConnect from "../../../lib/db";
import OTP from "../../../lib/modals/otp";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const sendEmail = async (userEmail, otp) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let info = await transporter.sendMail({
    from: '"Student Welfare Committee" <swc.nss.nfsu@gmail.com>',
    to: `${userEmail}`,
    subject: `🔐 OTP Verification Request for SWC`,
    text: `Hi Sir/Mam,\n\ Your Authentication OTP for SWC is : ${otp}  \n\nBest Regards,\nStudent Welfare Committee , NFSU`,
    html: `<br><br><h3 style="background-color:rgba(255, 192, 203, 0.72); border-radius:0.5rem; padding:1rem 0.5rem">${otp}</h3><br><h3>Valid for next 5 minutes. Kindly ignore if not requested by you.</h3><h3>Regards<br>The Student Welfare Committee<br>National Forensic Sciences University, Gandhinagar</h3>
        <br><img src="https://upload.wikimedia.org/wikipedia/en/9/96/National_Forensic_Sciences_University_Logo.png" alt="NFSU Logo" width="80" height="100"></img>`,
  });
};
export async function GET(req) {
  try {
    await dbConnect();
    let url = new URL(req.url);
    let searchParams = url.searchParams;
    let email = searchParams.get("email");

    let generatedOtp = Math.floor(100000 + Math.random() * 900000);

    const otp = new OTP({
      email: email,
      otp: generatedOtp,
    });
    await otp.save();

    // Send OTP to email
    sendEmail(email, generatedOtp);

    return NextResponse.json({
      message: "OTP sent successfully",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message, status: 400 });
  }
}
