import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function NotFound() {
  return (
    <div>
      <h1>...Oops!</h1>
      <p>The page you are looking for does not exist.</p>
      <p>
        If you were looking for a specific item, maybe it hasn't been added yet.
        You can add a new item by clicking <Link to="/add-item">here</Link>.
      </p>
    </div>
  );
}

export default NotFound;
