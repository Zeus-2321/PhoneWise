import React from "react";
import { Link } from "react-router-dom";
import image from "./pepe.jfif";

const notFoundStyles = {
    maxWidth: "90vw",
    margin: "auto",
    margintop: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
};

const imgStyles = {
    width: "400px",
    height: "auto",
    marginbottom: "1rem",
    maxWidth: "100%"
};

function NotFound() {
    return (
        <div style={notFoundStyles}>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for could not be found.</p>
            <img src={image} alt="pepe" style={imgStyles} />
            <Link to="/">Go back to the homepage</Link>
        </div>
    );
}

export default NotFound;