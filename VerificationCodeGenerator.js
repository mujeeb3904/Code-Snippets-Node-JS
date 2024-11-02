// Function for generating a verification code
function generateVerificationCode(length = 4) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
  return Array.from(
    { length },
    () => characters[Math.floor(Math.random() * characters.length)]
  ).join("");
}

// Send mail with nodemailer

const verificationCode = generateVerificationCode();

await transporter.sendMail({
  from: process.env.EMAIL,
  to: email,
  subject: "Email Verification Request",
  text: `Your verification code is ${verificationCode}`,
});
