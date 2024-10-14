import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "../src/App";
import "../src/assets/index.css";
import "../src/assets/global.css";
import "../src/assets/form.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
