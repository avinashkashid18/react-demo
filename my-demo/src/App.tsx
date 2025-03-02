import React from "react";
import ReactDOM from "react-dom/client";
import Home from "home/Home";
import Layout from "./Layout";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.css';
const App = () => (
  <Layout >
  
    This is home
    <Home/>
    
  </Layout>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);