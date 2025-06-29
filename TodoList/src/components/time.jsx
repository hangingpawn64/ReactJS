import React from 'react'
import './time.css'

function Time() {
  const formatTime = () => {
    const now = new Date().toLocaleString("en-GB", {
  timeZone: "Asia/Kolkata",
  hour12: true
  });
  return now;
}
  

  return (
    <p>{formatTime()}</p> // Call the function
  );
}

export default Time
