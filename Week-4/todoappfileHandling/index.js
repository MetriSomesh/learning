const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

var obj = {
  todos: [],
};

app.post("/add", async function (req, res) {
  const { id, todo } = req.body;

  obj.todos.push({ id: id, todo: todo });

  var json = JSON.stringify(obj);

  await fs.writeFile("./todos.json", json, "utf-8", function (err, data) {
    if (err) {
      return res.json({
        msg: "Failed to Create Todo",
      });
    }
    return res.json({
      msg: "Todo created Successfully",
      todo: todo,
    });
  });
});

app.post("/delete", async function (req, res) {
  const { id } = req.body;

  fs.readFile("./todos.json", "utf-8", function readFileCallback(err, data) {
    if (err) {
      return res.json({
        msg: "Unable to Locate File",
      });
    } else {
      obj = JSON.parse(data);
      obj.todos = obj.todos.filter((todo) => todo.id !== id);
      const json = JSON.stringify(obj);
      fs.writeFile("./todos.json", json, "utf-8", function (err, data) {
        if (err) {
          return res.json({ msg: "Faliled to write File " });
        }
        return res.json({ msg: "Todo deleted successfully" });
      });
    }
  });
});
app.listen(3000);
