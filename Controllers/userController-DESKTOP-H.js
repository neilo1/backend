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
        const findUser = await  User.find();
        res.json(findUser)
    } catch (error) {
        res.jason(error.message);
    }
}