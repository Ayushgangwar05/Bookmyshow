import React from "react";
import Navbar from "../Navbar/Navbar";
import Navbar1 from "../Navbar/Navbar1";
import Image from "../Gallery/Eventimg.jpg";
import Image1 from "../Gallery/Eventimg1.avif";
import Image2 from "../Gallery/Eventimg2.jpg"
import Image3 from "../Gallery/Eventimg3.jpg"
import Image4 from "../Gallery/Eventimg4.jpg"
import Footer1 from "../Footer/Footer1";
import Footer2 from "../Footer/Footer2";
import Footer3 from "../Footer/Footer3";
import Footer from "../Footer/Footer"

function Event() {
  return (
    <div>
      <Navbar />
      <Navbar1 />
      <div>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={Image} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Image1} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-target="#carouselExampleControls"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-target="#carouselExampleControls"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </button>
        </div>
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
                  <img src={Image2} class="card-img-top" alt="..." />
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
                    src={Image3}
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
                    src={Image4}
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
        <Footer />
        <Footer1 />
        <Footer2 />
        <Footer3/>
        </div>

    </div>
  );
}

export default Event;
