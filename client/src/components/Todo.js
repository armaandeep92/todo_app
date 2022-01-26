import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Todo = ({ edit, setEdit, todos, completeTodo, removeTodo, updateTodo }) => {

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: '',
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} setEdit={setEdit} onSubmit={submitUpdate} />;
  }
  return todos.length > 0 && todos.map((todo, index) => (
    <div
      className={'todo-row'}
      key={index}
    >
      <div key={todo._id} onClick={() => completeTodo(todo._id)}>
        {todo.task}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo._id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: todo._id, value: todo.task })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default Todo;
