import express from "express";
import userController from "./../controllers/userController"; //this format, instead of using path, helps intellisense
import authController from "../controllers/authControllerUser";
import rateLimit from "express-rate-limit";
const router = express.Router();

//for signing up
router.post(
  "/signup",
  rateLimit({
    windowMs: Number(process.env.RATE_LIMIT_TIME),
    limit: 5,
    message: "Rate limit exceeded, please try again later.",
  }),
  authController.signup
); //ok

//for logging in
router.post(
  "/login",
  rateLimit({
    windowMs: Number(process.env.RATE_LIMIT_TIME),
    limit: 7,
    message: "Rate limit exceeded, please try again later.",
  }),
  authController.login
);

router.post("/logout", authController.logout); //ok

router.get("/test", (req, res, next) => {
  res.status(200).json({
    status: "success",
  });
});

module.exports = router;
