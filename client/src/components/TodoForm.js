import React, { useState, useEffect, useRef } from "react";
import { BiArrowBack } from "react-icons/bi";
import { toast } from "react-toastify";

function TodoForm({edit, setEdit, onSubmit }) {
  const [input, setInput] = useState(edit ? edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      return toast.error("PLEASE ENTER SOMETHING!!!");
    }
    const taskDetails = {
      task: input,
    };
    onSubmit(taskDetails);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {edit.id ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input edit"
          />
          <button onClick={handleSubmit} className="todo-button edit">
            Update
          </button>
          <div className="icons back-icon">
            <BiArrowBack
              onClick={() => setEdit({ id: "", value: "" })}
              className="edit-icon"
            />
          </div>
        </>
      ) : (
        <>
          <input
            placeholder="Add a task"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="todo-button">
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
