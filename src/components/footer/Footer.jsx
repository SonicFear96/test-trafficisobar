import { useState } from "react";
import "./Footer.style.css";

export const Footer = () => {
  const [date] = useState(new Date().getFullYear());
  return (
    <footer className="page-footer">
      <div className="container footer-container">
        <p className="footer-copyright">Copyright © {date}</p>
      </div>
    </footer>
  );
};
