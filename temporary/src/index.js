import React from "react";
import ReactDOM from "react-dom";
import RequestForm from "./App"; // Import the RequestForm component
import "./styles.css"; // Ensure the CSS file is properly imported

ReactDOM.render(
  <React.StrictMode>
    <RequestForm />
  </React.StrictMode>,
  document.getElementById("root") // Ensure index.html has this ID
);
