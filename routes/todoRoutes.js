import { Router } from "express";
import { auth } from "../middlewares/auth.js";
import User from "../models/User.js";

let router = Router();

router.get("/", auth, async (req, res) => {
  let user = await User.findById(req.userId);
  res.send(`hello ${user.username}!`);
});

export default router;
