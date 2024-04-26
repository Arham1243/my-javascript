import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = ({ handleButtonClick, currentPage }) => {
  const pages = [
    "audio conversion",
    "available voices",
  ];

  return (
    <div className="form-sidebar">
      <ul className="form-sidebar__list">
        {pages.map((page, i) => (
          <li key={i}>
            <button
              type="button"
              className={
                pages.indexOf(currentPage) == i || i == 0 ? "step active" : "step"
              }

              onClick={() => handleButtonClick(page)}
            >
              <div className="step-count"><i className="fa-solid fa-microphone-lines"></i></div>
              <div className="step-info">

                <span className="name">{page}</span>
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
