import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const DateTime = ({
  formData,
  handleChangeForDate,
  handleChangeForTime,
  dateRef,
  timeRef,
}) => {
  return (
    <div className="page-content">
      <div className="section-content">
        <div className="heading">Select dateTime</div>
      </div>

      <div className="info my-4">
        <div className="row">
          <div className="col-lg-7">
            <div className="field">
              {/* <input
                type="date"
                ref={dateRef}
                name="date"
                value={formData.date}
                onChange={handleChangeForInput}
                required=""
                className="pe-3"
              /> */}
              <Calendar
                value={formData.date}
                onChange={handleChangeForDate}
                name="date"
              />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="time-calendar">
              <div className="selected-date">22-May-2028</div>
              <ul className="times-list">
                <li>
                  <input
                    onChange={handleChangeForTime}
                    value={formData.time}
                    type="radio"
                    name="time"
                    id="time-1"
                    className="d-none"
                  />
                  <label htmlFor="time-1" className="times-list__single">
                    <span className="value">12:00</span>
                    <span className="value">6:00</span>
                  </label>
                </li>
                <li>
                  <input
                    onChange={handleChangeForTime}
                    value={formData.time}
                    type="radio"
                    name="time"
                    id="time-2"
                    className="d-none"
                  />
                  <label htmlFor="time-2" className="times-list__single">
                    <span className="value">12:00</span>
                    <span className="value">12:00</span>
                  </label>
                </li>
                <li>
                  <input
                    onChange={handleChangeForTime}
                    value={formData.time}
                    type="radio"
                    name="time"
                    id="time-3"
                    className="d-none"
                  />
                  <label htmlFor="time-3" className="times-list__single">
                    <span className="value">12:00</span>
                    <span className="value">12:00</span>
                  </label>
                </li>
                <li>
                  <input
                    onChange={handleChangeForTime}
                    value={formData.time}
                    type="radio"
                    name="time"
                    id="time-4"
                    className="d-none"
                  />
                  <label htmlFor="time-4" className="times-list__single">
                    <span className="value">12:00</span>
                    <span className="value">12:00</span>
                  </label>
                </li>
                <li>
                  <input
                    onChange={handleChangeForTime}
                    value={formData.time}
                    type="radio"
                    name="time"
                    id="time-5"
                    className="d-none"
                  />
                  <label htmlFor="time-5" className="times-list__single">
                    <span className="value">12:00</span>
                    <span className="value">12:00</span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateTime;
