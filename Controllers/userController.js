import User from '../Models/userSchema.js';

export const createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.json(newUser)
    } catch (error) {
        res.json(error.message);
    }
}
export const getAll = async (req, res) => {
    try {
        const findUser = await User.find();
        res.json(findUser)
    } catch (error) {
        res.jason(error.message);
    }
}

export const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const updateUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updateUser);
        if (!updateUser) {
            return res.status(404).json({ message: "User not found." })
        }
    } catch (error) {
        res.json(error.message);
    }
}

export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteUser = await User.findByIdAndDelete(id);
        res.json(deleteUser);
        if (!deleteUser) {
            return res.status(404).json({ message: "User not found." });
        }
    } catch (error) {
        res.json(error.message);
    }
}