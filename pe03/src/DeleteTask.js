import React from 'react';

function DeleteTask({ task, deleteTask }) 
{
  const handleDeleteTask = () => 
  {
    deleteTask(task);
  };

  return (
    <button className='delete-task-button' onClick={handleDeleteTask}>
      Delete</button>
  );
}

export default DeleteTask;