import React, { useEffect, useState } from "react";

export default function Modal({ showModal, setShowModal }) {
  // Close the modal when clicking outside of it
  useEffect(() => {
    const handleBackdropClick = (e) => {
      if (e.target.classList.contains("modal")) {
        setShowModal(false);
      }
    };

    // Add event listener when the modal is open
    if (showModal) {
      document.body.addEventListener("click", handleBackdropClick);
    }

    // Clean up event listener when the modal is closed
    return () => {
      document.body.removeEventListener("click", handleBackdropClick);
    };
  }, [showModal, setShowModal]);

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [dob, setDob] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Phone.length != 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return false;
    } else if (isFutureDate(dob)) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return false;
    } else if (!isValidEmail(email)) {
      alert("Invalid email. Please check your email address.");
      return false;
    } else {
      document.getElementById("userForm").reset();
      setShowModal(false);
    }
  };

  function isFutureDate(inputDate) {
    // Get the current date
    const today = new Date();
    // Remove the time part of the current date (optional, if you only want to compare the date)
    today.setHours(0, 0, 0, 0);
    // Convert the input string to a Date object
    const givenDate = new Date(inputDate);
    // Compare the given date with today
    return givenDate > today;
  }

  function isValidEmail(email) {
    // Regular expression for validating an email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailPattern.test(email);
  }

  return (
    <div>
      <div
        className="modal fade show"
        style={{
          display: "block",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <form id="userForm" onSubmit={handleSubmit}>
                <h3>Fill Details</h3>
                <div className="row d-flex justify-center p-2">
                  <div className="col-12 mt-2">
                    <label>UserName:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      required
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  <div className="col-12 mt-2">
                    <label>Email Address:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="col-12 mt-2">
                    <label>Phone Number:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      required
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="col-12 mt-2">
                    <label>Date Of Birth:</label>
                    <input
                      type="date"
                      className="form-control"
                      id="dob"
                      required
                      onChange={(e) => setDob(e.target.value)}
                    />
                  </div>
                  <div className="col-12 mt-2">
                    <button
                      type="submit"
                      className="submit-button btn btn-primary"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
