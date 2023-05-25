import React from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-social">
                    <a href="https://www.linkedin.com/in/dev-pratap-4ligma69/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/Zeus-2321" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                </div>
                <ul className="footer-links">
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                </ul>
                <p>&copy;2023 PhoneWise</p>
            </div>
        </footer>
    );
};

export default Footer;
