// Investor Profile Image with Disk Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "D:/Authentication Flow/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
// Create the multer upload middleware
const upload = multer({ storage });
// Define the upload handler function
const handleUploadProfileImage = asyncHandler(async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  res.send("File uploaded successfully");
});

module.export = {
  handleUploadProfileImage,
  upload,
};
