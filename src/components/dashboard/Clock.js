import React, { useState, useEffect } from "react";

const Clock = () => {
  const [date, dateHandler] = useState({
    date: "",
    min: "",
    hour: "",
    pm: "",
    open: "",
  });

  useEffect(() => {
    setInterval(() => updateClock(), 10000);
  }, [date.min]);

  const updateClock = () => {
    let time = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
    });

    let min = new Date(time).getMinutes();
    let hour = new Date(time).getHours();

    if (new Date(time).getMinutes() !== date.min) {
      if (hour > 12) {
        hour = hour - 12;
        if (min < 10) {
          min = `0${min}`;
        }

        dateHandler({
          ...date,
          hour: hour,
          min,
          pm: true,
        });
      } else if (hour === 12) {
        if (min < 10) {
          min = `0${min}`;
        }
        dateHandler({
          ...date,
          date: "",
          hour: new Date(time).getHours(),
          min,
          pm: true,
        });
      } else if (hour === 24) {
        hour = hour - 12;
        if (min < 10) {
          min = `0${min}`;
        }

        dateHandler({
          ...date,
          hour: hour,
          min,
          pm: false,
        });
      } else {
        if (min < 10) {
          min = `0${min}`;
        }
        dateHandler({
          ...date,
          date: "",
          hour: new Date(time).getHours(),
          min,
          pm: false,
        });
      }
    }
  };
  setInterval(updateClock(), 500);

  const openDiv = (
    <div className='opendiv'>
      Markets are Open<span className='opened'></span>
    </div>
  );
  const closedDiv = (
    <div className='opendiv'>
      <div className='div'>Markets are Closed</div>
    </div>
  );

  const { hour, min, pm, open } = date;
  return (
    <div className='clocks'>
      <div className='clocks__time'>
        <div className='clocks__time-1'>Time In New York</div>
        <div className='clocks__time-1'>
          {`${hour}:${min} ${pm === true ? "PM" : "AM"}`}
        </div>
      </div>
      <div className='clocks__open'>{open ? openDiv : closedDiv}</div>
    </div>
  );
};

export default Clock;
