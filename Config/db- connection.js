import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongo_url = process.env.MONGO_URL;
export const database_connection = async () =>{
    try {
    await mongoose.connect(mongo_url);
    console.log('✅ Database connected successfully');
}
    catch (err) {
        console.log('❌ Database connection failed:', err.message);
    };

};

// module.exports = database_connection;