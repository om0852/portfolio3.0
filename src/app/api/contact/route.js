// import { connectToDB } from "@/app/utils/connection";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const { email,body,subject } = await req.json();

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "smartcoder0852@gmail.com",
        pass: "iuyk wfjm wswv ejyq",
      },
    });

    // Function to generate OTP
    
    const mail = await transporter.sendMail({
      from: email,
      to: "smartcoder0852@gmail.com",
      subject: subject,
      html: `<h1>${body}</h1>`,
    });

    // Set expiration time to 5 minutes from now
    return NextResponse.json({ message: "Success: email was sent" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "COULD NOT SEND MESSAGE" }, { status: 500 });
  }
}