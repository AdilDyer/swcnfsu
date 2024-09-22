// import User from "../../../lib/modals/user"; // Import your User model
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// to enable the cron job in the vercel :
// {
//   "crons": [
//     {
//       "path": "/api/sendBirthdayWish",
//       "schedule": "0 15 * * *"
//     }
//   ]
// }

export async function GET(req) {
  try {
    // Schedule a task to run every day at 3 PM in vercel.json
    const sendEmail = async (userEmail, userName) => {
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
        subject: `🎉 Happy Birthday in advance, ${userName} !`,
        text: `Hi ${userName},\n\nWe hope you have a wonderful birthday tomorrow!\n\nWe thought of wishing in advance to our buddy.\n\nBest Regards,\nStudent Welfare Committee , NFSU`,
        html: `<br>🎈 🥳 🎉 🎂 🥰 🎊<br><br><h3 style="background-color:rgba(255, 192, 203, 0.72); border-radius:0.5rem; padding:1rem 0.5rem">On behalf of everyone at the Student Welfare Committee, We want to wish you a very very awesome Happy Birthday! 🎉 🎂</h3><br><h3>We thought of wishing in advance to our buddy 🥰</h3><h3>Thank you for being a valued member of our community. We hope your special day is as wonderful as you are. Enjoy your day to the fullest!</h3><br><h3>Warmest wishes,<br>The Student Welfare Committee<br>National Forensic Sciences University, Gandhinagar</h3>
        <br><img src="https://upload.wikimedia.org/wikipedia/en/9/96/National_Forensic_Sciences_University_Logo.png" alt="NFSU Logo" width="80" height="100"></img>`,
      });
    };
    // const sendBirthdayEmails = async () => {
    //   const tomorrow = new Date();
    //   tomorrow.setDate(tomorrow.getDate() + 1); // Get tomorrow's date

    //   // Find users whose birthday is tomorrow
    //   const usersWithBirthdays = await User.find({
    //     birthdate: {
    //       $gte: new Date(tomorrow.setHours(0, 0, 0, 0)), // Start of the day
    //       $lt: new Date(tomorrow.setHours(23, 59, 59, 999)), // End of the day
    //     },
    //   });

    //   // Send emails
    //   for (let user of usersWithBirthdays) {
    //     await sendEmail(user.email, user.name);
    //   }
    // };
    // sendBirthdayEmails();
    sendEmail("aaddiillllllllll@gmail.com", "Mohit Sharma");
    return NextResponse.json({
      message: "Birthday emails sent successfully",
      status: 200,
    });
  } catch (error) {
    // Return error response in case of an exception
    return NextResponse.json({ error: error.message, status: 400 });
  }
}
