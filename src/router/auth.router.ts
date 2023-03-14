import { Router } from "express";

import { authController } from "../controller/auth.controller";
import { userMiddleware } from "../middleware/user.middleware";

const router = Router();

router.post(
  "/register",
  userMiddleware.isValidCreate,
  userMiddleware.getDynamicallyAndThrow("email"),
  authController.register
);
router.post(
  "/login",
  userMiddleware.isValidLogin,
  userMiddleware.getDynamicallyOrThrow("email"),
  authController.login
);

export const authRouter = router;
