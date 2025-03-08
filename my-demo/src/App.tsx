import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "homePage/HomePage";
import Layout from "./Layout";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
const App = () => (
  <Layout>
    <>
      This is home
      <HomePage />
    </>
  </Layout>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
