import React from "react";
import Image from "../Gallery/Screenshot (400).png";

function Footer2() {
  return (
    <div style={{ backgroundColor: "#1D1D1D", width: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            borderTopStyle: "solid",
            width: "44%",
            borderTopColor: "white",
            marginTop: "3vh",
          }}
        ></div>
        <div>
          <a
            style={{ color: "#6E6E6E", marginLeft: "1vw" }}
            class="navbar-brand"
            href="#"
          >
            book
            <img style={{ width: "2vw" }} src={Image} alt="#" />
            show
          </a>
        </div>
        <div
          style={{
            borderTopStyle: "solid",
            width: "44%",
            borderTopColor: "white",
            marginTop: "3vh",
          }}
        ></div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            gap: "2vw",
            justifyContent: "center",
            marginTop: "2vh",
          }}
        >
          <a style={{ color: "#6E6E6E", textDecoration: "none" }} href="#">
            <i style={{ fontSize: "2vw" }} class="bi bi-facebook"></i>
          </a>
          <a style={{ color: "#6E6E6E", textDecoration: "none" }} href="#">
            <i style={{ fontSize: "2vw" }} class="bi bi-twitter"></i>
          </a>
          <a style={{ color: "#6E6E6E", textDecoration: "none" }} href="#">
            <i style={{ fontSize: "2vw" }} class="bi bi-instagram"></i>
          </a>
          <a style={{ color: "#6E6E6E", textDecoration: "none" }} href="#">
            <i style={{ fontSize: "2vw" }} class="bi bi-youtube"></i>
          </a>
          <a style={{ color: "#6E6E6E", textDecoration: "none" }} href="#">
            <i style={{ fontSize: "2vw" }} class="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
      <br />
      <div style={{ fontSize: "13px", textAlign: "center", color: "#6E6E6E" }}>
        Copyright Bigtree Entertainment Pvt. Ltd. All Rights Reserved.
        <br />
        The content and images used on this site are copyright protected and
        copyrights vests with the respective owners. The usage of the content
        and images on this website is intended to promote the works and no
        endorsement of the artist shall be implied. Unauthorized use is
        prohibited and punishable by law.
      </div>
    </div>
  );
}

export default Footer2;
