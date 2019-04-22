import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => (
  <div className="jumbotron">
    <h1>About</h1>
    <p>About us! We are world popular eStore within UK</p>
    <Link to="/" className="btn btn-primary btn-lg">
      Go back
    </Link>
  </div>
);

export default AboutPage;
