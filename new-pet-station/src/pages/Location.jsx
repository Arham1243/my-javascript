import React from "react";


const Location = ({ formData, handleChangeForCheck , locations }) => {


  return (
    <div className="page-content">
      <div className="section-content">
        <div className="heading">Select location</div>
      </div>



      <div className="service my-4">
        <div className="service-list service-list--col row ">
          {locations.map((location, i) => (
            <div className="col-lg-6 col-sm-6" key={i}>
              <input
                type="radio"
                name="location"
                id={`location-${location.id}`}
                onClick={handleChangeForCheck}
                value={`${formData.location}`}
                className="service-list__check"
              />
              <label
                className="service-list__single"
                htmlFor={`location-${location.id}`}
              >
                <div className="avatar">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="imgFluid"
                    loading="lazy"
                  />
                </div>
                <div className="info">
                  <div className="title">{location.name}</div>
                </div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Location;
