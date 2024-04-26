import React, { useState } from "react";


const Confirmation = ({ formData, extra_services, services, discount }) => {
  const dateObject = new Date(formData.date);
  const formattedDate = dateObject.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
  return (
    <div className="page-content">
      <div className="section-content">
        <div className="heading">Confirm Details</div>
      </div>

      <div className="details my-4">
        <div className="details-box">
          <ul>
            <li>
              <span className="key">dateTime: </span>
              <span className="value">
                {formattedDate} / {formData.time}
              </span>
            </li>
            <li>
              <span className="key">Location: </span>
              <span className="value">{formData.location}</span>
            </li>
            <li>
              <span className="key">Service: </span>
              <span className="value">{formData.services}</span>
            </li>
          </ul>
        </div>
        <div className="details-box">
          <ul>
            {formData.service_extras.map((service_extra_id, i) => {
              // Find the corresponding service_extra object from extra_services based on its ID
              const selectedServiceExtra = extra_services.find(
                (extra_service) => extra_service.name === service_extra_id
              );

              // Check if selectedServiceExtra exists
              if (selectedServiceExtra) {
                return (
                  <li key={i}>
                    <span className="key">{selectedServiceExtra.name}</span>
                    <span className="data">QR{selectedServiceExtra.price}</span>
                  </li>
                );
              } else {
                return null; // If the selected service extra is not found, return null or handle accordingly
              }
            })}
          </ul>
        </div>
        <div className="details-box details-box--total">
          <ul>
            <li>
              <span className="key">Discount</span>
              <span className="value">
                QR
                {discount}
              </span>
            </li>
          </ul>
        </div>
        <div className="details-box details-box--total">
          <ul>
            <li>
              <span className="key">Total price</span>
              <span className="value">
                QR
                {(() => {
                  // Find the selected service
                  const selectedService = services.find(
                    (service) => service.name === formData.service
                  );

                  let totalPrice = selectedService ? selectedService.price : 0;

                  // Initialize serviceExtraPrice with totalPrice
                  let serviceExtraPrice = 0;

                  // Iterate through selected service extras
                  formData.service_extras.forEach((service_extra_id) => {
                    // Find the corresponding service extra
                    const selectedServiceExtra = extra_services.find(
                      (extra_service) => extra_service.name === service_extra_id
                    );

                    if (selectedServiceExtra) {
                      // Add the price of each service extra to serviceExtraPrice
                      serviceExtraPrice += selectedServiceExtra.price;
                    }
                  });

                  // Return the total price
                  return totalPrice + serviceExtraPrice - discount;
                })()}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
