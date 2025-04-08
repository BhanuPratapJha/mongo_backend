import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/temp");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.originalname + "-" + uniqueSuffix);
  }
});
export const upload = multer({ storage });

// const uploadMiddleware = (req, res, next) => {
//   upload.single("image")(req, res, (err) => {
//     if (err) {
//       return res.status(400).json({ error: "Error uploading file" });
//     }
//     next();
//   });
// };
// export default uploadMiddleware;