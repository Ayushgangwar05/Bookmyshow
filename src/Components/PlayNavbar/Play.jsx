import React from "react";
import Navbar1 from "../Navbar/Navbar1";
import Navbar from "../Navbar/Navbar";
import Image from "../Gallery/Playimg.avif";
import Image1 from "../Gallery/Playimg1.avif";
import Footer from "../Footer/Footer";
import Footer1 from "../Footer/Footer1";
import Footer2 from "../Footer/Footer2";
import Footer3 from "../Footer/Footer3";

function Play() {
  return (
    <div>
      <Navbar />
      <Navbar1 />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          backgroundColor: "#eeeae9",
        }}
      >
        <a href="#">
          <img style={{ marginTop: "2vh" }} src={Image} alt="#" />
        </a>
      </div>
      <br />
      <div style={{ width: "100%" }}>
        <h2 style={{ marginLeft: "9vw" }}>Play In Bareilly</h2>
        <br />
        <br />
        <br />
        <br />
        <a style={{ textDecoration: "none" }} href="#">
          <div
            class="card"
            style={{
              width: "18rem",
              borderStyle: "none",
              textAlign: "center",
              marginLeft: "66vw",
            }}
          >
            <img src={Image1} class="card-img-top" alt="#" />
            <div class="card-body">
              <h5
                style={{ color: "black", textDecoration: "none" }}
                class="card-title"
              >
                Nope! Nothing! Nada!
              </h5>
              <p
                style={{ color: "black", textDecoration: "none" }}
                class="card-text"
              >
                Sorry! There was nothing to load on this page.Kin dly visit the
                homepage for more entertainment
              </p>
              <a
                style={{ width: "17vw", backgroundColor: "red" }}
                href="#"
                class="btn btn-primary"
              >
                Visit Homepage
              </a>
            </div>
          </div>
        </a>
      </div>
      <Footer />
      <Footer1 />
      <Footer2 />
      <Footer3 />
    </div>
  );
}

export default Play;
