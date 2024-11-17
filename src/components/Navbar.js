import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">Denty</div>
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/doctors">Doctors</a>
        <a href="/price-list">Price List</a>
        <a href="/contact">Contact</a>
        <a href="/team">Team</a>
      </nav>
      <div className="actions">
        {/* زر Get in Touch ينقل لصفحة Contact */}
        <button
          className="get-in-touch"
          onClick={() => (window.location.href = "/contact")}
        >
          Get in touch
        </button>
        {/* زر اللغة Eng يبدّل بين اللغات */}
        <span
          className="language"
          onClick={() => alert("Switching languages is under development!")}
        >
          Eng
        </span>
      </div>
    </header>
  );
};

export default Navbar;
