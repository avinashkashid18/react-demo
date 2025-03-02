import React from "react";
import ReactDOM from "react-dom/client";
import Header from "container/Header";
import Footer from "container/Footer";
import Home from "home/Home";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.css';
const App = () => (
  <div className="container">
    <Header />
    This is home
    <Home/>
    <Footer/>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);