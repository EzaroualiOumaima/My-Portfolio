"use server"
import nodemailer from "nodemailer";


export async function sendMail({
  from,
  to,
  name,
  subject,
  body,
}: {
  from: string;
  to: string;
  name: string;
  subject: string;
  body: string;
}) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  // Create a Nodemailer transport object with the SMTP settings
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  // Verify the transport configuration
  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.error({ error });
    return;
  }

  // Send the email
  try {
    const sendResult = await transport.sendMail({
      from: from,
      to: to, // Use the recipient email address passed as an argument
      subject: subject,
      html: `
        <div
          style="
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-family: Arial, sans-serif;
          "
        >
          <h2 style="font-weight: 800; font-size: 30px;">Contact:</h2>
          <div class="details" style="margin-top: 20px">
            <p style="font-weight: 600">
              <strong style="color: red">From:</strong> ${name}
            </p>
            <p style="font-weight: 600">
              <strong style="color: red">Message:</strong> ${body}
            </p>
          </div>
        </div>
      `,
    });
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
}
