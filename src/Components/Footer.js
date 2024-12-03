import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} My Team. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
