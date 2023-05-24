const express = require("express");
const {
  createTodo,
  getTodos,
  deleteTodo,
  updateTodo,
} = require("../controller/todoListController");

const todoRouter = express.Router();

// GET all Todos
todoRouter.get("/", getTodos);

// POST a new Todo
todoRouter.post("/", createTodo);

// DELETE a Todo
todoRouter.delete("/:todoId", deleteTodo);

// UPDATE a Todo
todoRouter.patch("/:todoId", updateTodo);

module.exports = todoRouter;
