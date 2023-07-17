import React from "react";

function Searchboxinput() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          backgroundColor: "#C4C2C3",
          height: "20vh",
        }}
      >
        <i style={{ marginTop: "8vh" }} class="bi bi-arrow-left"></i>
        <input
          style={{ width: "35vw", marginTop: "8vh" }}
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search for Movies,Event,Plays,Sports and Activities"
          aria-label="Search"
        />
        <i style={{ marginTop: "8vh" }} class="bi bi-x-lg"></i>
      </div>
      <div
        style={{
          width: "100%",
          height: "20vh",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ marginLeft: "10vw", marginTop: "8vh" }}>
          <button style={{ borderStyle: "none" }}>MOVIES</button>
          <button style={{ backgroundColor: "#C4C2C3", borderStyle: "none" }}>
            CINEMAS
          </button>
        </div>
        <div
          style={{
            marginRight: "8vw",
            marginTop: "8vh",
          }}
        >
          <button
            style={{
              borderStyle: "none",
              backgroundColor: "white",
              marginLeft: "2px",
            }}
          >
            Filter
          </button>

          <button
            style={{
              borderRadius: "50px 50px",
              backgroundColor: "white",
              marginLeft: "2px",
            }}
          >
            Hindi
          </button>
          <button
            style={{
              borderRadius: "50px 50px",
              backgroundColor: "white",
              marginLeft: "2px",
            }}
          >
            English
          </button>
          <button
            style={{
              borderRadius: "50px 50px",
              backgroundColor: "white",
              marginLeft: "2px",
            }}
          >
            Punjabi
          </button>
        </div>
      </div>
      <div style={{ width: "100%", display: "flex" }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            marginLeft: "5vw",
          }}
        >
          <h6 style={{ color: "red" }}>Hindi</h6>
          <a
            style={{ color: "black" }}
            href="/buytickets/1920-horrors-of-the-heart/movie-BARE-ET00353537-MT/"
            class="sc-jHZirH cFuMtz"
          >
            1920: Horrors of the Heart (A)
            <i style={{ color: "red" }} class="bi bi-heart-fill"></i>{" "}
            <span style={{ color: "grey" }}>49%</span>
          </a>
          <a
            style={{ color: "black" }}
            href="/buytickets/ek-tha-tiger/movie-BARE-ET00007671-MT/"
            class="sc-jHZirH cFuMtz"
          >
            Ek Tha Tiger (UA){" "}
            <i style={{ color: "red" }} class="bi bi-heart-fill"></i>{" "}
            <span style={{ color: "grey" }}>27%</span>
          </a>
          <a
            style={{ color: "black" }}
            href="/buytickets/insidious-the-red-door-hindi/movie-BARE-ET00357728-MT/"
            class="sc-jHZirH fltwOB"
          >
            Insidious: The Red Door (Hindi) (A)
            <i style={{ color: "red" }} class="bi bi-heart-fill"></i>{" "}
            <span style={{ color: "grey" }}>64%</span>
          </a>
          <a
            style={{ color: "black" }}
            href="/buytickets/mission-impossible-dead-reckoning-part-one-hindi/movie-BARE-ET00362588-MT/"
            class="sc-jHZirH fltwOB"
          >
            Mission Impossible: Dead Reckoning - Part One (Hindi) (UA)
            <i style={{ color: "red" }} class="bi bi-heart-fill"></i>{" "}
            <span style={{ color: "grey" }}>64%</span>
          </a>
          <a
            style={{ color: "black" }}
            href="/buytickets/satyaprem-ki-katha/movie-BARE-ET00338378-MT/"
            class="sc-jHZirH cFuMtz"
          >
            Satyaprem Ki Katha (UA)
            <i style={{ color: "red" }} class="bi bi-heart-fill"></i>{" "}
            <span style={{ color: "grey" }}>94%</span>
          </a>
          <a
            style={{ color: "black" }}
            href="/buytickets/zara-hatke-zara-bachke/movie-BARE-ET00359644-MT/"
            class="sc-jHZirH cFuMtz"
          >
            Zara Hatke Zara Bachke (UA)
            <i style={{ color: "red" }} class="bi bi-heart-fill"></i>{" "}
            <span style={{ color: "grey" }}>74%</span>
          </a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "20vw",
          }}
        >
          <h6 style={{ color: "red" }}>English</h6>
          <a
            style={{ color: "black" }}
            href="/buytickets/mission-impossible-dead-reckoning-part-one/movie-BARE-ET00329481-MT/"
            class="sc-jHZirH fltwOB"
          >
            Mission Impossible: Dead Reckoning - Part One (UA)
            <i style={{ color: "red" }} class="bi bi-heart-fill"></i>
            <span style={{ color: "grey" }}>new</span>{" "}
            <span style={{ color: "grey" }}>24%</span>
          </a>
          <a
            style={{ color: "black" }}
            href="/buytickets/oppenheimer/movie-BARE-ET00347867-MT/"
            class="sc-jHZirH fltwOB"
          >
            Oppenheimer (A)<span>new</span>
          </a>
          <div style={{ marginTop: "3vh" }}>
            <h6 style={{ color: "red" }}>Punjabi</h6>
            <a
              style={{ color: "black" }}
              href="/buytickets/carry-on-jatta-3/movie-BARE-ET00311622-MT/"
              class="sc-jHZirH cFuMtz"
            >
              Carry On Jatta 3 (UA)
              <i style={{ color: "red" }} class="bi bi-heart-fill"></i>{" "}
              <span style={{ color: "grey" }}>78%</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searchboxinput;
