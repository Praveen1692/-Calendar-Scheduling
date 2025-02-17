import React from 'react';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, addMonths, subMonths } from 'date-fns';

const Calendar = ({ currentDate, selectedDate, onDateClick, onNextMonth, onPrevMonth }) => {
  const renderHeader = () => {
    const dateFormat = "MMMM yyyy";
  
    return (
      <div className="flex justify-between items-center p-2">
        <button onClick={onPrevMonth}>Prev</button>
        <h2>{format(currentDate, dateFormat)}</h2>
        <button onClick={onNextMonth}>Next</button>
      </div>
    );
  };

  const renderDays = () => {
    const days = [];
    const dateFormat = "EEEE";
    let startDate = startOfWeek(currentDate);
  
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="text-center p-1" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
  
    return <div className="grid grid-cols-7">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
  
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
  
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, "d");
        const cloneDay = day;
        days.push(
          <div
            className={`p-2 text-center cursor-pointer ${!isSameMonth(day, monthStart) ? "text-gray-400" : isSameDay(day, selectedDate) ? "bg-blue-500 text-white" : ""}`}
            key={day}
            onClick={() => onDateClick(cloneDay)}
          >
            {formattedDate}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7" key={day}>
          {days}
        </div>
      );
      days = [];
    }
  
    return <div>{rows}</div>;
  };

  return (
    <div className="border rounded-lg shadow-lg p-4">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default Calendar;