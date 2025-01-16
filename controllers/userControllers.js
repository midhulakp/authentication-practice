import User from "../models/User.js";

export const register = async (req, res, next) => {
  try {
    let { username, email, password, confirmPassword } = req.body;
    //verify user is in db already
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("User already exists,Please Login");
    }
    //creating a new user
    let newUser = await User.create({
      username,
      email,
      password,
      confirmPassword,
    });
    //sending response
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  let { email, password } = req.body;
  try {
    //verify user is in db already
    let existingUser = await User.findOne({ email });
    if (!existingUser) {
      throw new Error("User doesnt exist,Please Register");
    }
    //sending response
    res.status(201).json(existingUser);
  } catch (err) {
    next(err);
  }
};
