import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import User from "../models/user.model.js"
import { errorHandler } from "../utils/error.js"

//
//
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All Fields are required."))
  }

  try {
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      next(errorHandler(400, "User with this email already exists."))
    }

    const hashedPassword = bcryptjs.hashSync(password, 14)
    const newUser = new User({ username, email, password: hashedPassword })

    await newUser.save()
    console.log(newUser)
    return res.json({ message: "Signup successful" })
  } catch (error) {
    console.error(error)
    return next(error)
  }
}

//
//
//
export const signin = async (req, res, next) => {
  const { email, password } = req.body

  if (!email || !password || email === "" || password === "") {
    next(errorHandler(400, "All Fields are required."))
  }

  try {
    const validUser = await User.findOne({ email })
    if (!validUser) {
      return next(errorHandler(400, "User not found"))
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password)
    if (!validPassword) {
      return next(errorHandler(400, "Invalid password"))
    }

    const { password: pass, ...rest } = validUser._doc

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET)
    res.status(200).cookie("access token", token, { httpOnly: true }).json(rest)
  } catch (error) {
    next(error)
  }
}
