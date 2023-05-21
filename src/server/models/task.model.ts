import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
    {
        title: {
            type: String
        },
        due_date: {
            type: String
        }
    }
);

export default mongoose.model('Task', TaskSchema);

