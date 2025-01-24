import React, { useState } from "react";
import "../css/three.css";
import Swal from "sweetalert2";

const Page_three = () => {
  const [errorMassaget, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [attendanceConfirmation, setAttendanceConfirmation] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const [nameOfGuests, setNameOfGuests] = useState("");

  const handleSubmit = async () => {
    const formData = {
      name,
      attendanceConfirmation,
      numberOfGuests,
      nameOfGuests,
    };
    console.log(formData);

    try {
      if (
        !name &&
        !attendanceConfirmation &&
        !numberOfGuests &&
        !nameOfGuests
      ) {
        console.log(errorMassaget);
        Swal.fire({
          icon: "error",
          title: "Submission Failed",
          text: "Please complete all the required information.",
        });
      } else if (name && !numberOfGuests && !nameOfGuests) {
        const res = await fetch(
          "https://script.google.com/macros/s/AKfycbyT2p9CP3y6mY8zBICoI6D_wBhRZB47A9bu10Yo9YJs3W4DPGvFi95lzC-ffu4vYnS0fQ/exec?action=insert",
          {
            redirect: "follow",
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
              "Content-Type": "text/plain;charset=utf-8",
            },
          }
        );
        if (res.ok) {
          // Show success alert
          Swal.fire({
            icon: "success",
            title: "Data Submitted!",
            text: "Your reservation data has been successfully submitted.",
          });
          setName("");
          setAttendanceConfirmation("");
          setNumberOfGuests("");
          setNameOfGuests("");
        } else {
          throw new Error("Failed to submit data");
        }
      } else if (
        name &&
        attendanceConfirmation &&
        numberOfGuests &&
        nameOfGuests
      ) {
        const res = await fetch(
          "https://script.google.com/macros/s/AKfycbyT2p9CP3y6mY8zBICoI6D_wBhRZB47A9bu10Yo9YJs3W4DPGvFi95lzC-ffu4vYnS0fQ/exec?action=insert",
          {
            redirect: "follow",
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
              "Content-Type": "text/plain;charset=utf-8",
            },
          }
        );
        if (res.ok) {
          // Show success alert
          Swal.fire({
            icon: "success",
            title: "Data Submitted!",
            text: "Your reservation details have been successfully submitted.",
          });
          setName("");
          setAttendanceConfirmation("");
          setNumberOfGuests("");
          setNameOfGuests("");
        } else {
          throw new Error("Failed to submit data");
        }
      } else if (
        name &&
        // attendanceConfirmation &&
        (!numberOfGuests || !nameOfGuests)
      ) {
        Swal.fire({
          icon: "error",
          title: "Submission Failed",
          text: "Please provide the guest information.",
        });
      } else if (
        !name &&
        // attendanceConfirmation &&
        numberOfGuests &&
        nameOfGuests
      ) {
        Swal.fire({
          icon: "error",
          title: "Submission Failed",
          text: "Kindly enter your full name.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Submission Failed",
          text: "Please complete all the required information.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "There was an error submitting your reservation data.",
      });
    }
  };

  return (
    <div className="main_cover" data-aos="zoom-out-up">
      <div
        className="header_cover"
        data-aos="fade-down-right"
        data-aos-duration="1500"
      >
        <img src="assets/lampion_1.png" alt="" />
      </div>
      <div className="conten_cover contain_page2">
        <div className="form_section">
          <h2>RESERVATION</h2>
          <div className="form-container">
            <form>
              <div className="item_form">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`form-input ${name ? "active" : ""}`}
                  required
                />
              </div>
              <div className="item_drop">
                <label htmlFor="guests" className="form-label">
                  Attendance Confirmation
                </label>
                <select
                  id="attendance"
                  value={attendanceConfirmation}
                  onChange={(e) => setAttendanceConfirmation(e.target.value)}
                  className={`dropdown ${numberOfGuests ? "active" : ""}`}
                  required
                >
                  <option value="">No attend</option>
                  <option value="Attend">Attend</option>
                </select>
              </div>
              <div className="item_drop">
                <label htmlFor="guests" className="form-label">
                  Number of Guests:
                </label>
                <select
                  id="guests"
                  value={numberOfGuests}
                  onChange={(e) => setNumberOfGuests(e.target.value)}
                  className={`dropdown ${numberOfGuests ? "active" : ""}`}
                  required
                >
                  <option value="">0 Guest</option>
                  <option value="1">1 Guest</option>
                </select>
              </div>
              <div className="item_form">
                <label htmlFor="name" className="form-label">
                  Name of Guests:
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name of Guests"
                  value={nameOfGuests}
                  onChange={(e) => setNameOfGuests(e.target.value)}
                  className={`form-input ${nameOfGuests ? "active" : ""}`}
                  required
                />
              </div>
            </form>
            <div className="button-container">
              <button
                type="submit"
                className="glow-button"
                onClick={() => handleSubmit()}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="footer_cover"
        data-aos="fade-up-left"
        data-aos-duration="1500"
      >
        <img src="assets/ular_1.png" alt="" />
      </div>
    </div>
  );
};
export default Page_three;
