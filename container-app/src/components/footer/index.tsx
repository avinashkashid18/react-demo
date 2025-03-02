import React from "react"
export default function Footer() {
    return (
        <footer className="bg-dark text-light text-center py-3 mt-5">
      <div className="container">
        <p className="mb-0">&copy; {new Date().getFullYear()} MyWebsite. All Rights Reserved.</p>
      </div>
    </footer>
    )
}