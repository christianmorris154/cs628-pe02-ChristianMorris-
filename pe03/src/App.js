import React, { useState } from 'react';
import AddTask from './AddTask';
import DeleteTask from './DeleteTask';
import './index.css';

function TodoListApp() {
 const [task, setTask] = useState([]);

 const addTask = (taskName) => {
   setTask([...task, taskName]);
 };

 const deleteTask = (index) => 
 {
   setTask(task.filter((_, i) => i !== index));
 };

 return (
  <div className="todo-list-app">
    <h1>ToDo List App</h1>
    <AddTask addTask={addTask} />
    <ul>
      {task.map((task, index) => (
        <li key={index}>
          {task}
          <DeleteTask index={index} deleteTask={deleteTask} />
      </li>
    ))}
  </ul>
</div>
 );
}

export default TodoListApp;