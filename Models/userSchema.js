import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    age:{type:Number}
})
const User = new mongoose.model('day53', userSchema);
export default User;