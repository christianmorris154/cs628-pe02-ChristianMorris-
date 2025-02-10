import React, { useState } from 'react';
import './index.css';

function AddTask({ addTask }) 
{
  const [taskName, setTaskName] = useState('');

  const handleAddTask = () => {
    if (taskName.trim() !== '') {
      addTask(taskName);
      setTaskName('');
    }
  };

  return (
    <div className='add-task'>
      <input
        type="text"
        placeholder="Enter task description"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <div>
      <button className='add-task-button' onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
  );
}

export default AddTask;