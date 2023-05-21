
import { Router } from 'express';
import { login, logout, register, refreshToken } from '../controllers/auth.controller';
const authRoutes = Router();

authRoutes.post('/login', login);
authRoutes.post('/register', register);
authRoutes.post('/logout', logout);
authRoutes.post('/refresh-token', refreshToken);

export default authRoutes;