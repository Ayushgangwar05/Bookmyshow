import React from "react";
import Navbar from "../Navbar/Navbar";
import Navbar1 from "../Navbar/Navbar1";
import Image from "../Gallery/Sportimg.jpg";
import Image1 from "../Gallery/Sportimg1.jpg";
import Image2 from "../Gallery/Sportimg2.avif";
import Image3 from "../Gallery/Sportimg3.jpg";
import Footer from "../Footer/Footer";
import Footer1 from "../Footer/Footer1";
import Footer2 from "../Footer/Footer2";
import Footer3 from "../Footer/Footer3";

function Sport() {
  return (
    <div>
      <Navbar />
      <Navbar1 />
      <div style={{ backgroundColor: "#eeeae9", width: "100%" }}>
        <a style={{ display: "flex", justifyContent: "center" }} href="#">
          <img src={Image} alt="#" />
        </a>
      </div>
      <div style={{ display: "flex", gap: "5vw", marginTop: "10vh" }}>
        <div style={{ marginLeft: "10vw" }}>
          <h3>Filters</h3>
          <div style={{ width: "15vw", backgroundColor: "white" }}>
            <div class="btn-group">
              <button
                class="btn btn-secondary btn-sm dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Languages
              </button>
              <div class="dropdown-menu">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <button>Hindi</button>
                  <button>English</button>
                  <button>Punjabu</button>
                </div>
              </div>
            </div>

            <a style={{ color: "black", marginLeft: "6vw" }} href="#">
              Clear
            </a>
          </div>
          <br />
          <div style={{ width: "15vw", backgroundColor: "white" }}>
            <div class="btn-group">
              <button
                class="btn btn-secondary btn-sm dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Genres
              </button>
              <div class="dropdown-menu">
                <div style={{ display: "flex" }}>
                  <button>Romatic</button>
                  <button>Thriller</button>
                  <button>Drama</button>
                  <button>Musical</button>
                </div>
              </div>
            </div>

            <a style={{ color: "black", marginLeft: "6vw" }} href="#">
              Clear
            </a>
          </div>
          <br />
          <div style={{ width: "15vw", backgroundColor: "white" }}>
            <div class="btn-group">
              <button
                class="btn btn-secondary btn-sm dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Format
              </button>
              <div class="dropdown-menu">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <button>2D</button>
                  <button>IMAX 2D</button>
                </div>
              </div>
            </div>

            <a style={{ color: "black", marginLeft: "6vw" }} href="#">
              Clear
            </a>
          </div>
          <br />
          <button style={{ width: "15vw" }}>Browse by Cinemas</button>
        </div>

        <div>
          <h1>Movies In Bareilly</h1>
          <div>
            <button>Hindi</button>
            <button>English</button>
            <button>Punjabi</button>
          </div>
          <br />
          <div
            style={{
              backgroundColor: "white",
              display: "flex",
              width: "54vw",
              justifyContent: "space-between",
              height: "10vh",
              alignItems: "center",
            }}
          >
            <h3>Coming Soon</h3>
            <a href="#">Explore Upcoming Movies</a>
          </div>
          <br />
          <div style={{ display: "flex", gap: "5vw" }}>
            <div class="card" style={{ width: "14rem" }}>
              <a href="#">
                <img src={Image1} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">
                    Mission Impossible:Dead Reckoning-part...
                  </p>
                  <a href="#">UA</a>
                  <br />
                  <a href="#">Hindi,English,tamil,Telugu</a>
                </div>
              </a>
            </div>

            <div class="card" style={{ width: "14rem" }}>
              <a href="#">
                <img
                  style={{ height: "36vh" }}
                  src={Image2}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <p class="card-text">Zara Hatke Zara Bachke</p>
                  <a href="#">UA</a>
                  <br />
                  <a href="#">Hindi</a>
                </div>
              </a>
            </div>
            <div class="card" style={{ width: "14rem" }}>
              <a href="#">
                <img
                  style={{ height: "36vh" }}
                  src={Image3}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <p class="card-text">Satyaprem Ki Katha</p>
                  <a href="#">UA</a>
                  <br />
                  <a href="#">Hindi</a>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
        <Footer1 />
        <Footer2 />
        <Footer3 />
      </div>
    </div>
  );
}

export default Sport;
