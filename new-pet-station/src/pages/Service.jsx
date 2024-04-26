import React, { useRef, useState } from "react";


const Service = ({ formData, handleChangeForCheck,services }) => {
  const moreRefs = useRef([]);

  const showDetails = (index) => {
    const buttonRef = moreRefs.current[index];
    buttonRef.previousElementSibling.classList.toggle("show");
  };


  return (
    <div className="page-content">
      <div className="section-content">
        <div className="heading">Select Service</div>
      </div>

      <div className="service my-4">
        <div className="service__title">Dog Grooming</div>
        <ul className="service-list">
          {services.map((service, i) => (
            <li key={i}>
              <input
                type="radio"
                name="services"
                id={`service-${service.id}`}
                onClick={handleChangeForCheck}
                value={`${formData.services}-service`}
                className="service-list__check"
              />
              <label
                className="service-list__single"
                htmlFor={`service-${service.id}`}
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
                  <div className="time">{service.time}</div>
                  <div className="title">{service.name}</div>

                  <div className="desc">
                    <p>{service.desc}</p>
                  </div>
                  <div className="details">
                    {}
                    <ul>
                      {service.details.map((details, index) => (
                        <li key={index}>{details}</li>
                      ))}
                    </ul>
                  </div>
                  <button
                    type="button"
                    ref={(ref) => (moreRefs.current[i - 1] = ref)}
                    onClick={() => showDetails(i - 1)}
                    className="more"
                  >
                    Show More
                  </button>
                </div>
                <div className="price">QR{service.price}</div>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Service;
