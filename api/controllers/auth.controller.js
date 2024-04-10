import bcryptjs from "bcryptjs"
import User from "../models/user.model.js"

export const signup = async (req, res) => {
  const { username, email, password } = req.body

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({ message: "All fields are required." })
  }

  try {
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists." })
    }

    const hashedPassword = bcryptjs.hashSync(password, 14)
    const newUser = new User({ username, email, password: hashedPassword })

    await newUser.save()
    console.log(newUser)
    return res.json({ message: "Signup successful" })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: "Internal server error" })
  }
}
