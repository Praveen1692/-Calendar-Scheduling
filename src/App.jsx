import React, { useState } from 'react';


import { addMonths, subMonths } from 'date-fns';
import Calendar from './Component/Calendar';
import TaskForm from './Component/TaskForm';
import TaskList from './Component/TaskList';



const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tasks, setTasks] = useState([]);

  const addTask = (task, time) => {
    const newTask = { task, time, date: selectedDate };
    setTasks([...tasks, newTask]);
    // Here you can integrate the email notification service
  };

  const onDateClick = (day) => {
    setSelectedDate(day);
  };

  const onNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const onPrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const filteredTasks = tasks.filter(task => task.date.toDateString() === selectedDate.toDateString());

  return (
    <div className="container mx-auto p-4">
      <Calendar
        currentDate={currentDate}
        selectedDate={selectedDate}
        onDateClick={onDateClick}
        onNextMonth={onNextMonth}
        onPrevMonth={onPrevMonth}
      />
      <TaskForm addTask={addTask} />
      <TaskList tasks={filteredTasks} />
    </div>
  );
};

export default App;