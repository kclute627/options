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
    updateClock();
    setInterval(() => updateClock(), 10000);
  }, []);

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
        let open = `${hour}${min}`;
        open = parseInt(open, 10);

        dateHandler({
          ...date,
          hour: hour,
          min,
          pm: true,
          open,
        });
      } else if (hour === 12) {
        if (min < 10) {
          min = `0${min}`;
        }
        let open = `${hour}${min}`;
        open = parseInt(open, 10);
        dateHandler({
          ...date,
          date: "",
          hour: new Date(time).getHours(),
          min,
          pm: true,
          open,
        });
      } else if (hour === 24) {
        hour = hour - 12;
        if (min < 10) {
          min = `0${min}`;
        }
        let open = `${hour}${min}`;
        open = parseInt(open, 10);

        dateHandler({
          ...date,
          hour: hour,
          min,
          pm: false,
          open,
        });
      } else {
        if (min < 10) {
          min = `0${min}`;
        }
        let open = `${hour}${min}`;
        open = parseInt(open, 10);
        dateHandler({
          ...date,
          date: "",
          hour: new Date(time).getHours(),
          min,
          pm: false,
          open,
        });
      }
    }
  };

  const openDiv = (
    <div className='opendiv'>
      Markets are Open<span className='opened'></span>
    </div>
  );
  const closedDiv = (
    <div className='opendiv'>
      <div className='opendiv__text'>Markets are Closed </div>
      <span className='closed'></span>
    </div>
  );

  const { hour, min, pm, open } = date;
  return (
    <div className='rights'>
      <div className='rights__time'>
        <div className='rights__time-1'>
          {`${hour}:${min} ${pm === true ? "PM" : "AM"} EST`}
        </div>
      </div>
      <div className='rights__open'>
        {(open <= 330 && pm) || (open >= 830 && !pm) || ((open >=1200 && pm) && (open <=1259 && pm)) ? openDiv : closedDiv}
      </div>
    </div>
  );
};

export default Clock;
