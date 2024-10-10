import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Modal from "./Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App mt-20">
      <h1>User Details Modal</h1>
      <button class="btn btn-md btn-info" onClick={() => setShowModal(true)}>
        Open Form
      </button>
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
    </div>
  );
}

export default App;
