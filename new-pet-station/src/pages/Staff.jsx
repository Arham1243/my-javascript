import React, { useState } from "react";


const Staff = ({ formData, handleChangeForCheck, staffs }) => {
  
  return (
    <div className="page-content page1">
      <div className="section-content">
        <div className="heading">Select staff</div>
      </div>

      <div className="service">
        <div className="service-list service-list--col row ">
          {staffs.map((staff, i) => (
            <div className="col-lg-6 col-sm-6" key={i}>
              <input
                type="radio"
                name="staff"
                id={`staff-${staff.id}`}
                onClick={handleChangeForCheck}
                value={`${formData.staff}`}
                className="service-list__check"
              />
              <label
                className="service-list__single"
                htmlFor={`staff-${staff.id}`}
              >
                <div className="avatar">
                  <img
                    src={staff.image}
                    alt={staff.name}
                    className="imgFluid"
                    loading="lazy"
                  />
                </div>
                <div className="info">
                  <div className="text-capitalize title">{staff.name}</div>
                  <div className="text-capitalize time">
                    {staff.designation}
                  </div>
                  <div className="text-lowercase time">{staff.email}</div>
                  <div className="time">{staff.phone}</div>
                </div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Staff;
