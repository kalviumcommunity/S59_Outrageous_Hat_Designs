import React from 'react';

function DateTime({ createdAt }) {
  const dateObj = new Date(createdAt);

  const date = dateObj.toLocaleDateString(); 
  const time = dateObj.toLocaleTimeString();

  return (
    <div className="date-time">
      <p>{date} {time}</p>
    </div>
  );
}

export default DateTime;
