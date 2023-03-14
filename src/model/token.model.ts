import { model, Schema, Types } from "mongoose";

import { User } from "./user.model";

const tokensSchema = new Schema({
  _user_id: {
    type: Types.ObjectId,
    required: true,
    ref: User,
  },
  accessToken: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
    required: true,
  },
});

export const Token = model("Token", tokensSchema);
