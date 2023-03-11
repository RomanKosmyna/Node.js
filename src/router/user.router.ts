import { Request, Response, Router } from "express";

import { userController } from "../controller/user.controller";
import { userMiddleware } from "../middleware/user.middleware";
import { User } from "../model/user.model";

const router = Router();

router.post("/", userController.create);

router.get("/", userMiddleware.isUserValidCreate, userController.getAll);

router.get(
  "/:userId",
  userMiddleware.isUserIdValid,
  userMiddleware.getByIdAndThrow,
  userController.getById
);

router.put(
  "/:userId",
  userMiddleware.isUserIdValid,
  userMiddleware.isUserValidUpdate,
  userController.update
);

router.delete(
  "/:userId",
  userMiddleware.isUserIdValid,
  async (req: Request, res: Response) => {
    const { userId } = req.params;

    const user = await User.deleteOne({ _id: userId });
    res.json(user);
  }
);

export const userRouter = router;
