import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Render the main App component into the root element
ReactDOM.render(<App />, document.getElementById("root"));

// Service worker registration for offline support and faster load times
serviceWorker.unregister();
