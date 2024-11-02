const handleGetInvestorProfile = asyncHandler(async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await Register.findById(userId).select(
      "fullName email origin"
    );
    if (!user) {
      return res.status(404).json({ msg: "User not found." });
    }
    // Format user profile data for the response
    const userProfile = {
      fullName: user.fullName,
      email: user.email,
      origin: user.origin,
    };

    return res.status(200).json(userProfile);
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return res.status(500).json({ msg: "Server Error" });
  }
});

module.export = handleGetInvestorProfile;
