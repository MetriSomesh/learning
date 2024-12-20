const express = require("express");

const app = express();
app.use(express.json());
let todos = [];
let counter = 0;
app.get("/", function (req, res) {
  res.send("<b>hello world</b>");
});

app.post("/add", async function (req, res) {
  const { todo } = await req.body;
  //   const todo = await body.json();
  todos.push({
    id: counter,
    todo: todo,
  });
  counter = counter + 1;
  res.json({
    msg: "Todo created Successfully",
    todos: todos,
  });
});

app.post("/delete", async function (req, res) {
  const id = await req.body;
  //   const id = await body.json();

  todos = todos.filter((todo) => {
    todo.id !== id;
  });

  res.json({
    msg: "Todo deleted Successfully",
    todos: todos,
  });
});

app.post("/update", async function (req, res) {
  const { id, update } = req.body;
  //   const update = req.body;
  //   const todo = update;

  todosIndex = todos.findIndex((todo) => todo.id == id);

  todos[todosIndex].todo = update;

  res.json({
    msg: "Todo updated successfully",
    todos: todos,
  });
});

app.listen(3000);
