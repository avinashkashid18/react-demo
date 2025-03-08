import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import HomeCarousel from "./components/carousal";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function HomePage() {
  return (
    <div className="container">
      <HomeCarousel />
      <div>Framework: react-18</div>
    </div>
  );
}
