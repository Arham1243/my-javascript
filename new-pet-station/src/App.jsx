import React, { useRef, useState } from "react";
import Sidebar from "./components/Sidebar";
import Location from "./pages/Location";
import Service from "./pages/Service";
import Confirmation from "./pages/Confirmation";
import DateTime from "./pages/DateTime";
import Information from "./pages/Information";
import ServiceExtras from "./pages/ServiceExtras";
import Staff from "./pages/Staff";
import ThankYou from "./pages/ThankYou";
import "@fortawesome/fontawesome-free/css/all.css";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("location");
  const [formsubmitted, setFormsubmitted] = useState(false);
  const dateRef = useRef("");
  const timeRef = useRef("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormsubmitted(true);
    setCurrentPage("thankyou");
  };

  const discount = 10;
  const extra_services = [
    {
      id: uuidv4(),
      name: "PICK AND DROP (OUT OF DOHA)",
      price: 300.0,
      image:
        "http://petstation.qa/wp-content/uploads/booknetic/services/a3ea77f27c209e43e0c583ff552d3aed.jpg",
    },
    {
      id: uuidv4(),
      name: "PICK AND DROP",
      price: 310.0,
      image:
        "http://petstation.qa/wp-content/uploads/booknetic/services/a3ea77f27c209e43e0c583ff552d3aed.jpg",
    },
    {
      id: uuidv4(),
      name: "PICK AND DROP (OUT OF DOHA)",
      price: 320.0,
      image:
        "http://petstation.qa/wp-content/uploads/booknetic/services/a3ea77f27c209e43e0c583ff552d3aed.jpg",
    },
  ];

  const locations = [
    {
      id: uuidv4(),
      name: "Pet Care Center Downtown",
      image: "https://via.placeholder.com/73x73",
    },
    {
      id: uuidv4(),
      name: "Paws and Claws Pet Spa",
      image: "https://via.placeholder.com/73x73",
    },
    {
      id: uuidv4(),
      name: "Happy Tails Pet Grooming",
      image: "https://via.placeholder.com/73x73",
    },
    {
      id: uuidv4(),
      name: "Woof Woof Pet Salon",
      image: "https://via.placeholder.com/73x73",
    },
  ];

  const staffs = [
    {
      id: uuidv4(),
      name: "John Rick",
      email: "johnrick@petstation.qa",
      phone: "+974 6695 5549",
      designation: "Groomer",
      image: "https://via.placeholder.com/73x73",
    },
    {
      id: uuidv4(),
      name: "Emily Smith",
      email: "emilysmith@petstation.qa",
      phone: "+974 6695 5550",
      designation: "Groomer",
      image: "https://via.placeholder.com/73x73",
    },
    {
      id: uuidv4(),
      name: "David Brown",
      email: "davidbrown@petstation.qa",
      phone: "+974 6695 5551",
      designation: "Groomer",
      image: "https://via.placeholder.com/73x73",
    },
    {
      id: uuidv4(),
      name: "Sarah Johnson",
      email: "sarahjohnson@petstation.qa",
      phone: "+974 6695 5552",
      designation: "Groomer",
      image: "https://via.placeholder.com/73x73",
    },
  ];

  const services = [
    {
      id: uuidv4(),
      name: "Medium Dog Full Grooming (8-15 Kg)",
      time: "1H 30M",
      desc: "Full Grooming Package for Medium Dogs",
      image: "https://via.placeholder.com/73x73",
      price: 350.0,
      details: [
        "Hair Cut",
        "De Matting",
        "Eye Wash",
        "Nails Clipping",
        "Ear Cleaning",
        "Paw Pad Cleaning",
        "Sanitary Cleaning",
        "Shampoo Bath",
        "Blow Dry",
      ],
    },
    {
      id: uuidv4(),
      name: "Large Dog Full Grooming (16-30 Kg)",
      time: "2H",
      desc: "Full Grooming Package for Large Dogs",
      image: "https://via.placeholder.com/73x73",
      price: 400.0,
      details: [
        "Hair Cut",
        "De Matting",
        "Eye Wash",
        "Nails Clipping",
        "Ear Cleaning",
        "Paw Pad Cleaning",
        "Sanitary Cleaning",
        "Shampoo Bath",
        "Blow Dry",
      ],
    },
    {
      id: uuidv4(),
      name: "Extra-Large Dog Full Grooming (31+ Kg)",
      time: "2H 30M",
      desc: "Full Grooming Package for Extra-Large Dogs",
      image: "https://via.placeholder.com/73x73",
      price: 450.0,
      details: [
        "Hair Cut",
        "De Matting",
        "Eye Wash",
        "Nails Clipping",
        "Ear Cleaning",
        "Paw Pad Cleaning",
        "Sanitary Cleaning",
        "Shampoo Bath",
        "Blow Dry",
      ],
    },
  ];

  const [formData, setFormData] = useState({
    location: "",
    staff: "",
    services: "",
    service_extras: [],
    date: "",
    time: "",
    name: "",
    surname: "",
    email: "",
    phone: "",
  });

  const steps = [
    "location",
    "staff",
    "service",
    "service_extras",
    "dateTime",
    "information",
    "confirmation",
  ];

  const goToNextStep = (event) => {
    event.preventDefault();
    const currentIndex = steps.indexOf(currentPage);

    switch (currentIndex) {
      case 0:
        if (formData.location === "") {
          toast("Please Choose Location");
          return;
        }
        break;
      case 1:
        if (formData.staff === "") {
          toast("Please Choose Staff");
          return;
        }
        break;
      case 2:
        if (formData.services === "") {
          toast("Please Choose Service");
          return;
        }
        break;
      case 4:
        if (formData.date === "" || formData.time === "") {
          if (formData.date === "") {
            toast("Please Select Date");
            return;
          }
          if (formData.time === "") {
            toast("Please Time Date");
            return;
          }
          return;
        }
        break;
      case 5:
        if (
          formData.name === "" ||
          formData.surname === "" ||
          formData.email === "" ||
          formData.phone === ""
        ) {
          toast("Please fill in all required fields.");

          return;
        }
        break;
      default:
        break;
    }

    // Proceed to the next step if all required fields are filled out
    if (currentIndex < steps.length - 1) {
      setCurrentPage(steps[currentIndex + 1]);
    }
  };

  const goToPreviousStep = () => {
    const currentIndex = steps.indexOf(currentPage);

    if (currentIndex > 0) {
      setCurrentPage(steps[currentIndex - 1]);
    }
  };

  const handleChangeForCheck = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.nextElementSibling.querySelector(".title").textContent,
    });
    console.log(formData);
  };

  const handleChangeForMultiCheck = (e) => {
    const { name, checked, value } = e.target;

    let updatedServiceExtras = [...formData.service_extras]; // Create a copy of the current service_extras array

    if (checked) {
      updatedServiceExtras.push(value); // Add the value to the array if the checkbox is checked
    } else {
      updatedServiceExtras = updatedServiceExtras.filter(
        (item) => item !== value
      ); // Remove the value if the checkbox is unchecked
    }

    setFormData({
      ...formData,
      [name]: updatedServiceExtras, // Update the service_extras array in the formData state
    });
  };
  const handleChangeForInput = (e) => {
    console.log(e);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };
  const handleChangeForDate = (date) => {
    setFormData({
      ...formData,
      date: date,
    });
    console.log(formData);
  };
  const handleChangeForTime = (e) => {
    let start_time = e.target.parentNode
      .querySelector(".times-list__single")
      .querySelector("span:nth-child(1)").textContent;
    let end_time = e.target.parentNode
      .querySelector(".times-list__single")
      .querySelector("span:nth-child(2)").textContent;
    let time = `${start_time} - ${end_time}`;
    setFormData({
      ...formData,
      time: time,
    });
    console.log(formData);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "confirmation":
        return (
          <Confirmation
            formData={formData}
            extra_services={extra_services}
            services={services}
            discount={discount}
          />
        );
      case "dateTime":
        return (
          <DateTime
            formData={formData}
            handleChangeForDate={handleChangeForDate}
            handleChangeForTime={handleChangeForTime}
            dateRef={dateRef}
            timeRef={timeRef}
          />
        );
      case "information":
        return (
          <Information
            formData={formData}
            handleChangeForInput={handleChangeForInput}
          />
        );
      case "service":
        return (
          <Service
            formData={formData}
            handleChangeForCheck={handleChangeForCheck}
            services={services}
          />
        );
      case "service_extras":
        return (
          <ServiceExtras
            formData={formData}
            handleChangeForMultiCheck={handleChangeForMultiCheck}
            extra_services={extra_services}
          />
        );
      case "staff":
        return (
          <Staff
            formData={formData}
            handleChangeForCheck={handleChangeForCheck}
            staffs={staffs}
          />
        );
      case "thankyou":
        return <ThankYou />;
      default:
        return (
          <Location
            formData={formData}
            handleChangeForCheck={handleChangeForCheck}
            locations={locations}
          />
        );
    }
  };

  return (
    <section className="form-wrapper">
      <div className="container">
        <div className="row  justify-content-center">
          <div className="col-lg-11">
            <form className="form" onSubmit={handleSubmit}>
              <div className="row g-0">
                <div className="col-lg-3">
                  <Sidebar
                    handleButtonClick={(page) => setCurrentPage(page)}
                    currentPage={currentPage}
                  />
                </div>
                <div className="col-lg-9">
                  <div className="form-content">
                    {renderPage()}

                    {!formsubmitted && (
                      <div className="form-content__btns">
                        <button
                          type="button"
                          onClick={goToPreviousStep}
                          className={`themeBtn ${
                            steps.indexOf(currentPage) == 0 ? "disabled" : ""
                          }`}
                        >
                          Go Back
                        </button>
                        <button
                          type={
                            steps.indexOf(currentPage) === steps.length - 1
                              ? "submit"
                              : "button"
                          }
                          onClick={
                            steps.indexOf(currentPage) === steps.length - 1
                              ? undefined // No action for submit button
                              : goToNextStep
                          }
                          className="themeBtn"
                        >
                          {steps.indexOf(currentPage) === steps.length - 1
                            ? "Submit"
                            : "Next Step"}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
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
