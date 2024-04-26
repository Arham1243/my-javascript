import React, { useState } from "react";

const ServiceExtras = ({
  formData,
  handleChangeForMultiCheck,
  extra_services,
}) => {
  return (
    <div className="page-content">
      <div className="section-content">
        <div className="heading">Select service_extras</div>
      </div>

      <div className="service my-4">
        <div className="service__title">
          Medium Size Dog (7-15 Kg) Full Grooming
        </div>
        <ul className="service-list">
          {extra_services.map((service, i) => (
            <li key={i}>
              <input
                type="checkbox"
                name="service_extras"
                id={`${service.id}`}
                onClick={handleChangeForMultiCheck}
                value={service.name}
                className="service-list__check"
              />
              <label
                className="service-list__single"
                htmlFor={`${service.id}`}
              >
                <div className="avatar">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="imgFluid"
                    loading="lazy"
                  />
                </div>
                <div className="info">
                  <div className="title">{service.name}</div>
                </div>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceExtras;
