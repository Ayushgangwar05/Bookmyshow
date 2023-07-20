import React from "react";
import "../Navbar/Navbar";
import { Link, BrowserRouter as Router } from "react-router-dom";
function Navbar1() {
  return (
    <div
      className="Navbar1main"
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: "#1f2533",
      }}
    >
      <div className="Navbar1" style={{ marginLeft: "9vw" }}>
        <ul class="nav">
          <li class="nav-item">
            <Router>
              <Link to="/Movies">Movies</Link>
            </Router>
          </li>
          <li class="nav-item">
            <a style={{ color: "#A8A8A8" }} class="nav-link" href="#">
              Stream
            </a>
          </li>
          <li class="nav-item">
            <a style={{ color: "#A8A8A8" }} class="nav-link" href="#">
              Event
            </a>
          </li>
          <li class="nav-item">
            <a style={{ color: "#A8A8A8" }} class="nav-link active" href="#">
              Plays
            </a>
          </li>
          <li class="nav-item">
            <a style={{ color: "#A8A8A8" }} class="nav-link active" href="#">
              Sports
            </a>
          </li>
          <li class="nav-item">
            <a style={{ color: "#A8A8A8" }} class="nav-link active" href="#">
              Activities
            </a>
          </li>
          <li class="nav-item">
            <a style={{ color: "#A8A8A8" }} class="nav-link active" href="#">
              Buzz
            </a>
          </li>
        </ul>
      </div>
      <div style={{ marginRight: "6vw" }}>
        <ul class="nav">
          <li class="nav-item">
            <a style={{ color: "#A8A8A8" }} class="nav-link active" href="#">
              ListYourShow
            </a>
          </li>
          <li class="nav-item">
            <a style={{ color: "#A8A8A8" }} class="nav-link" href="#">
              Corporates
            </a>
          </li>
          <li class="nav-item">
            <a style={{ color: "#A8A8A8" }} class="nav-link" href="#">
              Offers
            </a>
          </li>
          <li class="nav-item">
            <a style={{ color: "#A8A8A8" }} class="nav-link" href="#">
              Gift Cards
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar1;
