// Email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  return res.status(400).json({ msg: "Invalid email address" });
}
// Passport and Legal Id validation
const legalIdRegex = /^[a-zA-Z0-9]{5,}$/;
if (!legalIdRegex.test(legalId)) {
  return res.status(400).json({ msg: "Invalid Legal ID format." });
}
// Phone Number Validation
const phoneRegex = /^\+?[1-9]\d{1,14}$/;
if (!phoneRegex.test(phoneNumber)) {
  return res.status(400).json({ msg: "Invalid phone number" });
}
// Password Validation
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
if (!passwordRegex.test(password)) {
  return res.status(400).json({
    msg: "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.",
  });
}
