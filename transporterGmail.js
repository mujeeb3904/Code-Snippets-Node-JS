// Configure transporter for Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

// Send Gmail with node Mailer

const verificationCode = generateVerificationCode();

await transporter.sendMail({
  from: process.env.EMAIL,
  to: email,
  subject: "Email Verification Request",
  text: `Your verification code is ${verificationCode}`,
});
