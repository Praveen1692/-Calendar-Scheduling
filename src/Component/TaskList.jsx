import React from 'react';

const TaskList = ({ tasks }) => {
  console.log("task", tasks);
  
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-2xl">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">Task List</h1>
        <ul className="list-none p-0">
          {tasks.map((task, index) => (
            <li 
              key={index} 
              className="bg-gray-50 p-4 mb-4 last:mb-0 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center 
                         hover:bg-purple-100 hover:shadow-lg transition-all duration-300"
            >
              <span className="font-semibold text-blue-800 mb-2 sm:mb-0">Task Time: {task.time}</span>
              <span className="ml-0 sm:ml-4 text-gray-600">Task Title: {task.task}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;