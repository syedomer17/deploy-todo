import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

function EditTodoForm({ editTodo, task }) {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    editTodo(value, task.id);
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
        placeholder="Update task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <motion.button
        type="submit"
        className="todo-btn"
        whileHover={{ scale: 1.1 }}
      >
        Update Task
      </motion.button>
    </motion.form>
  );
}

export default TodoWrapper;
