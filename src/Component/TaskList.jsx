import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <ul className="list-disc p-4">
      {tasks.map((task, index) => (
        <li key={index} className="p-2 border-b">
          {task.time} - {task.task}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;