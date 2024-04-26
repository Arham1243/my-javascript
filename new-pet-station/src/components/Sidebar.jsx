import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = ({ handleButtonClick, currentPage }) => {
  const [completedSteps, setCompletedSteps] = useState([]);
  const steps = [
    "location",
    "staff",
    "service",
    "service_extras",
    "dateTime",
    "information",
    "confirmation",
  ];

  return (
    <div className="form-sidebar">
      <ul className="form-sidebar__list">
        {steps.map((step, i) => (
          <li
            key={i}
            className={steps.indexOf(currentPage) == i ? "active" : ""}
          >
            <button
              type="button"
              className={
                steps.indexOf(currentPage) == i ? "step active" : "step"
              }
            >
              <div className="step-count" data-number={i + 1}></div>
              <div className="step-info">
                <span className="num">Step {i + 1}</span>
                <span className="name">{step}</span>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
    // <ul>
    //   <li><button onClick={() => handleButtonClick("welcome")}>Home</button></li>
    //   <li><button onClick={() => handleButtonClick("about")}>About</button></li>
    //   <li><button onClick={() => handleButtonClick("contact")}>Contact</button></li>
    // </ul>
  );
};

export default Header;
