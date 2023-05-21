import { Request, Response } from "express";
import Task from "../models/task.model";

const createTask = async (req: Request, res: Response) => {
  try {
    const { Task: title, Due_Date } = req.body;
    
    const newTask = new Task({ title, Due_Date });
    await newTask.save();

    res.json({ message: "New task created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const getTasks = async (req: Request, res: Response) => {
  try {
    res.json({ message: "Get tasks" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};



export { createTask, getTasks };
