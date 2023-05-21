import authRoutes from "./auth.routes";
import { Router } from "express";

const routes = Router();

routes.use("/auth", authRoutes);


export default routes;