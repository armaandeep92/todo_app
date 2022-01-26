import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import {
  getAllTodoTasks,
  addTodoTask,
  updateTodoTask,
  deleteTodoTask,
} from "../services/taskServices";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState({
    id: '',
    value: ''
  });

  useEffect(() => { getData() }, []);

  const getData = async () => {
    const allTodos = await getAllTodoTasks();
    setTodos(allTodos);
  };

  const addTodo = async (taskDetails) => {
    if (!taskDetails.task || /^\s*$/.test(taskDetails.task)) {
      return;
    }

    const result = await addTodoTask(taskDetails);
    if(result.status === 200){ getData() };
  };

  const updateTodo = async (todoId, newValue) => {
    if (!newValue.task || /^\s*$/.test(newValue.task)) {
      return;
    }
    const result = await updateTodoTask(todoId, newValue);
    if(result.status === 200){ getData() };
  };

  const removeTodo = async (id) => {
    console.log(id);
    const result = await deleteTodoTask(id);
    if(result.status === 200){ getData() };
  };

  return (
    <>
      <h1>Let's Plan your day</h1>
      {!edit.id ? <TodoForm onSubmit={addTodo} edit={edit} setEdit={setEdit} /> : null }
      <Todo
        todos={todos}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        edit={edit}
        setEdit={setEdit}
      />
    </>
  );
};

export default TodoList;
