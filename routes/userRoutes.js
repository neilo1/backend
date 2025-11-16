import express from 'express';
const router = express.Router();
import {createUser, getAll, updateUser, deleteUser} from '../Controllers/userController.js';

router.post('/create', createUser);
router.get('/all', getAll);
router.patch('/update/:id', updateUser);
router.delete("/delete/:id", deleteUser);

export default router;