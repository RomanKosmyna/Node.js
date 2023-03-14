import { Request, Response, Router } from "express";

import { userController } from "../controller/user.controller";
import { userMiddleware } from "../middleware/user.middleware";
import { User } from "../model/user.model";

const router = Router();

router.post("/", userMiddleware.isValidCreate, userController.create);

router.get("/", userController.getAll);

router.get(
  "/:userId",
  userMiddleware.isIdValid,
  userMiddleware.getByIdAndThrow,
  userController.getById
);

router.put(
  "/:userId",
  userMiddleware.isIdValid,
  userMiddleware.isValidUpdate,
  userController.update
);

router.delete(
  "/:userId",
  userMiddleware.isIdValid,
  async (req: Request, res: Response) => {
    const { userId } = req.params;

    const user = await User.deleteOne({ _id: userId });
    res.json(user);
  }
);

export const userRouter = router;
