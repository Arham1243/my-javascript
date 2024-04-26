import React, { useRef, useState } from "react";
import Sidebar from "./components/Sidebar";
import Welcome from "./pages/Welcome";
import AvailableVoices from "./pages/AvailableVoices";
import "@fortawesome/fontawesome-free/css/all.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("location");


  const pages = [
    "audio conversion",
    "available voices",
  ];



  const renderPage = () => {
    switch (currentPage) {
      case "audio conversion":
        return <Welcome />;
      case "available voices":
        return <AvailableVoices />;
      default:
        return <Welcome />;
    }
  };

  return (
    <section className="form-wrapper">
      <div className="container">
        <div className="row  justify-content-center">
          <div className="col-lg-12">
            <div className="form">
              <div className="row g-0">
                <div className="col-lg-3">
                  <Sidebar
                    handleButtonClick={(page) => setCurrentPage(page)}
                    currentPage={currentPage}
                  />
                </div>
                <div className="col-lg-9">
                  <div className="form-content">{renderPage()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="dark"
      />
    </section>
  );
};

export default App;
