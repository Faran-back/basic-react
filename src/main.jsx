// import React, { StrictMode } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// import Card from './components/Card.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* <Card name="Alice" btnText="Click me !" /> */}
  <App />
  </StrictMode>
)


