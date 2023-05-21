import { Request, Response } from "express";

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    res.json({ email, password });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    res.json({ email, password });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const logout = async (req: Request, res: Response) => {
  try {
    res.json({ message: "Logout" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const refreshToken = async (req: Request, res: Response) => {
  try {
    res.json({ message: "Refresh token" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export { login, logout, register, refreshToken };
