import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId, //ref to User model id field (ObjectId)
      ref: "User", // ref to User model name (User)
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId, //ref to SubTodo model id field (ObjectId)
        ref: "subTodo", // ref to SubTodo model name (SubTodo)
      },
    ], // array of subTodo ids
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
