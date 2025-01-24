import React, { useState, useEffect } from "react";
import "../componen/countdown.css";

const Countdown = () => {
  // Set the target date and time (7th February 2025, 10:30 AM)
  const targetDate = new Date("2025-02-07T10:00:00");

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000); // Update every second

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  // Function to calculate the remaining time
  function calculateTimeLeft(targetDate) {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24)); // Calculate days
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    ); // Calculate hours
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)); // Calculate minutes
    const seconds = Math.floor((difference % (1000 * 60)) / 1000); // Calculate seconds

    return { days, hours, minutes, seconds };
  }

  // Display the remaining time in Days, Hours, Minutes, Seconds format
  return (
    <div className="countdown-container">
      <h2>COUNTDOWN :</h2>
      <div className="countdown">
        <div className="cont_clock">
          <h5>{`${timeLeft.days.toString().padStart(2, "0")}`}</h5>
          <h6>Days</h6>
        </div>
        <div className="cont_clock">
          <h5>{`${timeLeft.hours.toString().padStart(2, "0")}`}</h5>
          <h6>Hours</h6>
        </div>
        <div className="cont_clock">
          <h5>{`${timeLeft.minutes.toString().padStart(2, "0")}`}</h5>
          <h6>Minutes</h6>
        </div>
        <div className="cont_clock">
          <h5>{`${timeLeft.seconds.toString().padStart(2, "0")}`}</h5>
          <h6>Seconds</h6>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
