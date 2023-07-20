import React from "react";
import Image from "../Gallery/Screenshot (400).png";
import "../Navbar/Navbar.css";

function Navbar({ SideBox }) {
  return (
    <div>
      <nav
        style={{
          width: "100%",
          height: "10vh",
          backgroundColor: "#333545",
        }}
        class="navbar navbar-expand-lg"
      >
        <a
          style={{ marginLeft: "9vw", color: "white" }}
          class="navbar-brand"
          href="#"
        >
          book
          <img style={{ width: "2vw" }} src={Image} alt="#" />
          show
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="form-inline my-2 my-lg-0">
            <input
              style={{ width: "35vw" }}
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search for Movies,Event,Plays,Sports and Activities"
              aria-label="Search"
            />
            va
          </form>
          <ul style={{ marginLeft: "22vw" }} class="navbar-nav ">
            <li class="nav-item dropdown">
              <a
                style={{ color: "#A8A8A8" }}
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Search
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
          <div style={{ marginLeft: "2vw" }}>
            <button type="button" class="btn btn-danger">
              Sign in
            </button>
          </div>
          <div
            onClick={SideBox}
            style={{ display: "flex", flexDirection: "column", margin: "25px" }}
          >
            <div
              style={{
                width: "25px",
                height: "2px",
                backgroundColor: "white",
                margin: "3px 0",
              }}
            ></div>

            <div
              style={{
                width: "25px",
                height: "2px",
                backgroundColor: "white",
                margin: "3px 0",
              }}
            ></div>

            <div
              style={{
                width: "25px",
                height: "2px",
                backgroundColor: "white",
                margin: "3px 0",
              }}
            ></div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
