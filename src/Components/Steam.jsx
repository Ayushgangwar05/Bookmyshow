import React from "react";
import Navbar from "./Navbar";
import Navbar1 from "./Navbar1";
import Image from "../Gallery/et00007671-wxjdynzgqj-portrait.jpg";
import Image1 from "../Gallery/et00040397-hvhwwysyvp-portrait.avif";
import Image2 from "../Gallery/et00329481-bcufavugyg-portrait.avif";
import Image3 from "../Gallery/et00349309-beggdrqvkq-portrait.avif";
import Image4 from "../Gallery/et00359644-mnukadneej-portrait.avif";

function Steam() {
  return (
    <div>
      <Navbar />
      <Navbar1 />

      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              style={{ width: "100vw", height: "100vh" }}
              src={Image}
              class="d-block w-100"
              alt="#"
            />
            <div>
              <img
                style={{ width: "20vw", height: "50vh" }}
                src={Image3}
                alt="#"
              />
              <h1>Evil Dead Rise</h1>
            </div>
          </div>
          <div class="carousel-item">
            <img
              style={{ width: "100vw", height: "100vh" }}
              src={Image1}
              class="d-block w-100"
              alt="#"
            />
          </div>
          <div class="carousel-item">
            <img
              style={{ width: "100vw", height: "100vh" }}
              src={Image2}
              class="d-block w-100"
              alt="#"
            />
          </div>
          <div class="carousel-item">
            <img
              style={{ width: "100vw", height: "100vh" }}
              src={Image3}
              class="d-block w-100"
              alt="#"
            />
          </div>
          <div class="carousel-item">
            <img
              style={{ width: "100vw", height: "100vh" }}
              src={Image4}
              class="d-block w-100"
              alt="#"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-target="#carouselExampleIndicators"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-target="#carouselExampleIndicators"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Steam;
