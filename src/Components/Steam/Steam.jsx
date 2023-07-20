import React from "react";
import Navbar from "../Navbar/Navbar";
import Navbar1 from "../Navbar/Navbar1";
import Image from "../Gallery/BatmanBackground-img.jpg";
import Image1 from "../Gallery/BatmanBackground-img.jpg";
import Image2 from "../Gallery/et00329481-bcufavugyg-portrait.avif";
import Image3 from "../Gallery/et00349309-beggdrqvkq-portrait.avif";
import Image5 from "../Gallery/Bootimg.jpg";
import Image6 from "../Gallery/Mission Impossible background.jpg";
import Image7 from "../Gallery/Confession backgroundimg.jpg";
import Image8 from "../Gallery/Confessionimg.jpg";
import Image9 from "../Gallery/FAFBackgroundimg.jpg";
import Image10 from "../Gallery/FAFimg.jpg";
import Image11 from "../Gallery/Steamimg1.avif";
import Image12 from "../Gallery/steamimg2.jpg";
import Image13 from "../Gallery/Steamimg3.jpg";
import Image14 from "../Gallery/Steamimg4.jpg";
import Image15 from "../Gallery/Steamimg5.jpg";
import Image16 from "../Gallery/Steamimg6.jpg";
import Image17 from "../Gallery/Steamimg7.jpg";
import Image18 from "../Gallery/Steamimg8.jpg";
import Image19 from "../Gallery/Steamimg9.jpg";
import Image20 from "../Gallery/Steamimg10.jpg";
import Image21 from "../Gallery/Steamimg11.jpg";
import Image22 from "../Gallery/Steamimg12.jpg";
import Image23 from "../Gallery/Steamimg13.jpg";
import Image24 from "../Gallery/Steamimg14.jpg";
import Image25 from "../Gallery/Steamimg15.jpg";
import Image26 from "../Gallery/Steamimg16.jpg";
import Image27 from "../Gallery/Steamimg17.jpg";
import Image28 from "../Gallery/Steamimg18.avif";

import Image29 from "../Gallery/Steamimg20.avif";
import Footer from "../Footer/Footer";
import Footer1 from "../Footer/Footer1";
import Footer2 from "../Footer/Footer2";
import Footer3 from "../Footer/Footer3";

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
          <div style={{ position: "relative" }} class="carousel-item active">
            <img
              style={{
                width: "100vw",
                height: "80vh",
                filter: "drop-shadow(40)",
              }}
              src={Image5}
              class="d-block w-100"
              alt="#"
            />
            <div
              style={{
                position: "absolute",
                top: "0",
                margin: "15vh 13vw",
                display: "flex",
              }}
            >
              <img
                style={{
                  width: "20vw",
                  height: "50vh",
                  borderRadius: "20px 20px",
                }}
                src={Image3}
                alt="#"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "2vw",
                  marginTop: "10vh",
                }}
              >
                <a style={{ textDecoration: "none" }} href="#">
                  <h1 style={{ color: "white" }}>Evil Dead Rise</h1>
                </a>
                <a style={{ color: "white", textDecoration: "none" }} href="#">
                  1h 39m. Horrow . A
                </a>
                <a style={{ color: "white", textDecoration: "none" }} href="#">
                  English
                </a>
                <a
                  style={{
                    width: "35vw",
                    color: "white",
                    textDecoration: "none",
                  }}
                  href="#"
                >
                  "Evil Dead Rise"tells a twisted tale of two estranged
                  sister,whose reunion is cut short by the rise of
                  flesh-possessing demons,thrusing them into a primal battle for
                  survival.
                </a>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              style={{ width: "100vw", height: "80vh" }}
              src={Image6}
              class="d-block w-100"
              alt="#"
            />
            <div
              style={{
                position: "absolute",
                top: "0",
                margin: "15vh 13vw",
                display: "flex",
              }}
            >
              <img
                style={{
                  width: "20vw",
                  height: "50vh",
                  borderRadius: "20px 20px",
                }}
                src={Image2}
                alt="#"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "2vw",
                  marginTop: "10vh",
                }}
              >
                <a style={{ textDecoration: "none" }} href="#">
                  {" "}
                  <h1 style={{ color: "white", textDecoration: "none" }}>
                    Mission: Impossible - Fallout
                  </h1>
                </a>
                <a style={{ color: "white", textDecoration: "none" }} href="#">
                  2h 39m. Action.Adventure,Thriller.13+
                </a>
                <a style={{ color: "white", textDecoration: "none" }} href="#">
                  English
                </a>
                <a
                  style={{
                    width: "35vw",
                    color: "white",
                    textDecoration: "none",
                  }}
                  href="#"
                >
                  After a mission goes,ethan and his IMF team are forced to
                  become reluctant partners with a hard-hitting CIA agent as
                  they race against time to stop a nuclear catastrophe.
                </a>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              style={{ width: "100vw", height: "80vh" }}
              src={Image9}
              class="d-block w-100"
              alt="#"
            />
            <div
              style={{
                position: "absolute",
                top: "0",
                margin: "15vh 13vw",
                display: "flex",
              }}
            >
              <img
                style={{
                  width: "20vw",
                  height: "50vh",
                  borderRadius: "20px 20px",
                }}
                src={Image10}
                alt="#"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "2vw",
                  marginTop: "10vh",
                }}
              >
                <a style={{ textDecoration: "none" }} href="#">
                  {" "}
                  <h1 style={{ color: "white" }}>Fast X</h1>
                </a>
                <a style={{ color: "white", textDecoration: "none" }} href="#">
                  2h 30m. Action , Adventure , Crime , Thriller .a
                </a>
                <a style={{ color: "white", textDecoration: "none" }} href="#">
                  English
                </a>
                <a
                  style={{
                    width: "35vw",
                    color: "white",
                    textDecoration: "none",
                  }}
                  href="#"
                >
                  Dom Toretto and his family must confront a terrifying new
                  enemy who's fueled by revenge.
                </a>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              style={{ width: "100vw", height: "80vh" }}
              src={Image7}
              class="d-block w-100"
              alt="#"
            />
            <div
              style={{
                position: "absolute",
                top: "0",
                margin: "15vh 13vw",
                display: "flex",
              }}
            >
              <img
                style={{
                  width: "20vw",
                  height: "50vh",
                  borderRadius: "20px 20px",
                }}
                src={Image8}
                alt="#"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "2vw",
                  marginTop: "10vh",
                }}
              >
                <a style={{ textDecoration: "none" }} href="#">
                  {" "}
                  <h1 style={{ color: "white" }}>A Confession</h1>
                </a>
                <a style={{ color: "white", textDecoration: "none" }} href="#">
                  4h 20m • Biography , Crime , Drama • 18+
                </a>
                <a style={{ color: "white", textDecoration: "none" }} href="#">
                  English
                </a>
                <a
                  style={{
                    width: "35vw",
                    color: "white",
                    textDecoration: "none",
                  }}
                  href="#"
                >
                  DSU Stephen fulcher is determined to find the killer of a
                  missing women,even if it means jeopardising his career and
                  reputation.
                </a>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              style={{ width: "100vw", height: "80vh" }}
              src={Image}
              class="d-block w-100"
              alt="#"
            />
            <div
              style={{
                position: "absolute",
                top: "0",
                margin: "15vh 13vw",
                display: "flex",
              }}
            >
              <img
                style={{
                  width: "20vw",
                  height: "50vh",
                  borderRadius: "20px 20px",
                }}
                src={Image1}
                alt="#"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "2vw",
                  marginTop: "10vh",
                }}
              >
                <a style={{ textDecoration: "none" }} href="#">
                  <h1 style={{ color: "white" }}>Shazam! Fury of the Gods</h1>
                </a>
                <a style={{ color: "white", textDecoration: "none" }} href="#">
                  2h 10m • Action , Adventure , Fantasy • 13+
                </a>
                <a style={{ color: "white", textDecoration: "none" }} href="#">
                  English
                </a>
                <a
                  style={{
                    width: "35vw",
                    color: "white",
                    textDecoration: "none",
                  }}
                  href="#"
                >
                  Billy Batson and his foster siblings,who transform into
                  superheros by saying "Shazam!",are forced to fight the
                  Daughters of Atlas,who are using a weapon that could destroy
                  the world.
                </a>
              </div>
            </div>
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
      <br />
      <div style={{ width: "100%" }}>
        <h1 style={{ marginLeft: "19.5vw", fontSize: "20px" }}>
          Premiere of the week
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          <a href="#">
            <img style={{ width: "14vw" }} src={Image11} alt="#" />
          </a>
          <a href="#">
            <img style={{ width: "14vw" }} src={Image12} alt="#" />
          </a>
          <a href="#">
            <img style={{ width: "14vw" }} src={Image13} alt="#" />
          </a>
          <a href="#">
            <img style={{ width: "14vw" }} src={Image14} alt="#" />
          </a>
        </div>
      </div>
      <br />
      <div style={{ width: "100%" }}>
        <h1 style={{ marginLeft: "19.5vw", fontSize: "20px" }}>
          Upcoming Releases
        </h1>
        <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
          <a style={{ textDecoration: "none", color: "red" }} href="#">
            <img style={{ width: "14vw" }} src={Image15}></img>
            <br />
            PRE-BOOK
          </a>
          <a style={{ textDecoration: "none", color: "red" }} href="#">
            <img style={{ width: "14vw" }} src={Image16}></img>
            <br />
            PRE-BOOK
          </a>
          <a style={{ textDecoration: "none", color: "red" }} href="#">
            <img style={{ width: "14vw" }} src={Image17}></img>
            <br />
            PRE-BOOK
          </a>
          <a style={{ textDecoration: "none", color: "red" }} href="#">
            <img style={{ width: "14vw" }} src={Image18}></img>
            <br />
            PRE-BOOK
          </a>
        </div>
      </div>
      <div style={{ backgroundColor: "blue" }}>
        <i
          style={{ fontSize: "23px", marginLeft: "21vw", color: "black" }}
          class="bi bi-play-circle"
        >
          EXCLUSIVES
          <br />
          <span
            style={{ fontSize: "15px", marginLeft: "22vw", color: "black" }}
          >
            {" "}
            Exciting titles available only on stream
          </span>
        </i>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5vh",
            gap: "20px",
          }}
        >
          <a href="#">
            <img style={{ width: "14vw" }} src={Image18} alt="#" />
          </a>
          <a href="#">
            <img style={{ width: "14vw" }} src={Image19} alt="#" />
          </a>
          <a href="#">
            <img style={{ width: "14vw" }} src={Image20} alt="#" />
          </a>
          <a href="#">
            <img style={{ width: "14vw" }} src={Image21} alt="#" />
          </a>
        </div>
      </div>
      <br />
      <div>
        <h1 style={{ marginLeft: "19.5vw", fontSize: "22px" }}>
          Best of Tom Cruise Movies
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <a href="#">
            <img style={{ width: "14vw" }} src={Image22} alt="#" />
          </a>
          <a href="#">
            <img style={{ width: "14vw" }} src={Image23} alt="#" />
          </a>
          <a href="#">
            <img style={{ width: "14vw" }} src={Image24} alt="#" />
          </a>
          <a href="#">
            <img style={{ width: "14vw" }} src={Image25} alt="#" />
          </a>
        </div>
      </div>
      <br />
      <div style={{ backgroundColor: "blueviolet" }}>
        <h1 style={{ marginLeft: "19vw", fontSize: "22px" }}>Spotlight</h1>
        <div style={{ gap: "10px", display: "flex", justifyContent: "center" }}>
          <a href="#">
            <img style={{ width: "30vw" }} src={Image25} alt="#" />
          </a>
          <a href="#">
            <img style={{ width: "30vw" }} src={Image26} alt="#" />
          </a>
        </div>
      </div>
      <div>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={Image27} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Image28} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Image29} class="d-block w-100" alt="..." />
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
      <div>
        <Footer />
        <Footer1 />
        <Footer2 />
        <Footer3 />
      </div>
    </div>
  );
}

export default Steam;
