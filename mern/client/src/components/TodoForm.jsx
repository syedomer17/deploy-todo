import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value);
    setValue("");
  };

  return (
    <motion.form
      className="TodoForm"
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <input
        type="text"
        className="todo-input"
        placeholder="What is today's task?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <motion.button
        type="submit"
        className="todo-btn"
        whileHover={{ scale: 1.1 }}
      >
        Add Task
      </motion.button>
    </motion.form>
  );
}

export default TodoForm