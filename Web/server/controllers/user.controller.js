import User from '../models/user.model.js';
export const getAllUser = async (req, res) => { 
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
} 