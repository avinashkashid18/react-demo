import React from "react";
import ReactDOM from "react-dom/client";
import Header from "container/Header";
import Footer from "container/Footer";


export default function Layout({ children }) {
    return (
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="container flex-grow-1 mt-4">{children}</main>
        <Footer />
      </div>
    );
  };
  