import React, { useState } from "react";

const Information = ({ formData, handleChangeForInput }) => {
  return (
    <div className="page-content">
      <div className="section-content">
        <div className="heading">Fill information</div>
      </div>

      <div className="info my-4">
        <div className="info-form">
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <div className="field">
                <label className="title">
                  Name <span className="text-danger">*</span>
                </label>
                <div className="wrapper">
                  <input
                    type="text"
                    name="name"
                    onChange={handleChangeForInput}
                    value={formData.name}
                    required=""
                  />
                  <span className="icon">
                    <i className="fa-solid fa-user"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="field">
                <label className="title">
                  Surname <span className="text-danger">*</span>
                </label>
                <div className="wrapper">
                  <input
                    type="text"
                    name="surname"
                    onChange={handleChangeForInput}
                    value={formData.surname}
                    required=""
                  />
                  <span className="icon">
                    <i className="fa-solid fa-user"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="field">
                <label className="title">
                  Email <span className="text-danger">*</span>
                </label>
                <div className="wrapper">
                  <input
                    type="text"
                    name="email"
                    onChange={handleChangeForInput}
                    value={formData.email}
                    required=""
                  />
                  <span className="icon">
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="field">
                <label className="title">
                  Phone <span className="text-danger">*</span>
                </label>
                <div className="wrapper">
                  <input
                    type="text"
                    name="phone"
                    onChange={handleChangeForInput}
                    value={formData.phone}
                    required=""
                  />
                  <span className="icon">
                    <i className="fa-solid fa-phone"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
