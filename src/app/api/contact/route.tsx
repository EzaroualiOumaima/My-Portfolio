import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

// Handles POST requests to /api
export async function POST(request: NextRequest) {
  const password = process.env.SMTP_PASSWORD;
  const myEmail = process.env.SMTP_EMAIL;

  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // create transporter object
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: myEmail,
      pass: password,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: myEmail,
      to: myEmail,
      subject: `You got message from ${name}`,
      html: `
      <p>Name: ${name} </p>
        <p>Email: ${email} </p>
        <p>Message: ${message} </p>
      `,
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "COULD NOT SEND MESSAGE" });
  }
}
