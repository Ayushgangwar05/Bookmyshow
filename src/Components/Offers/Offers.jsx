import React from "react";
import "../Offers/Offer.css";

function Offers() {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <div>
        <h1
          style={{ fontWeight: "200", fontSize: "25px", textAlign: "center" }}
        >
          FILTER OFFERS BY
        </h1>
      </div>
      <br />
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "2vw",
          justifyContent: "center",
        }}
      >
        <a
          className="Link"
          style={{
            textDecoration: "none",
            color: "black",
          }}
          href="#"
        >
          <div
            style={{ width: "4vw", height: "8vh", alignItems: "center" }}
            class="card OfferCard"
          >
            <i style={{ fontSize: "2vw" }} class="bi bi-credit-card"></i>
          </div>
          <div style={{ marginTop: "1vh", marginLeft: ".5vw" }}>
            <h6 style={{ fontSize: "10px" }}>Credit Card</h6>
          </div>
        </a>

        <a
          className="Link"
          style={{ textDecoration: "none", color: "black" }}
          href="#"
        >
          <div
            class="card OfferCard"
            style={{ width: "4vw", height: "8vh", alignItems: "center" }}
          >
            <i style={{ fontSize: "2vw" }} class="bi bi-credit-card"></i>
          </div>
          <div style={{ marginTop: "1vh", marginLeft: ".5vw" }}>
            <h6 style={{ fontSize: "10px" }}>Debit Card</h6>
          </div>
        </a>
        <a
          className="Link"
          style={{ textDecoration: "none", color: "black" }}
          href="#"
        >
          <div
            style={{ width: "4vw", height: "8vh", alignItems: "center" }}
            class="card OfferCard"
          >
            <i style={{ fontSize: "2vw" }} class="bi bi-bookmarks"></i>
          </div>
          <div style={{ marginTop: "1vh", marginLeft: ".2vw" }}>
            <h6 style={{ fontSize: "10px" }}>BookMyShow</h6>
          </div>
        </a>
        <a
          className="Link"
          style={{ textDecoration: "none", color: "black" }}
          href="#"
        >
          <div
            style={{ width: "4vw", height: "8vh", alignItems: "center" }}
            class="card OfferCard"
          >
            <i style={{ fontSize: "2vw" }} class="bi bi-tv"></i>
          </div>
          <div style={{ marginTop: "1vh", marginLeft: "1vw" }}>
            <h6 style={{ fontSize: "10px" }}>Cinema</h6>
          </div>
        </a>
        <a
          className="Link"
          style={{ textDecoration: "none", color: "black" }}
          href="#"
        >
          <div
            style={{ width: "4vw", height: "8vh", alignItems: "center" }}
            class="card OfferCard"
          >
            <i style={{ fontSize: "2vw" }} class="bi bi-wallet2"></i>
          </div>
          <div style={{ marginTop: "1vh", marginLeft: "1vw" }}>
            <h6 style={{ fontSize: "10px" }}>Wallet</h6>
          </div>
        </a>
        <a
          className="Link"
          style={{ textDecoration: "none", color: "black" }}
          href="#"
        >
          <div
            style={{ width: "4vw", height: "8vh", alignItems: "center" }}
            class="card OfferCard"
          >
            <i style={{ fontSize: "2vw" }} class="bi bi-bricks"></i>
          </div>
          <div style={{ marginTop: "1vh", marginLeft: ".9vw" }}>
            <h6 style={{ fontSize: "10px" }}>Rewards</h6>
          </div>
        </a>
        <a
          className="Link"
          style={{ textDecoration: "none", color: "black" }}
          href="#"
        >
          <div
            style={{ width: "4vw", height: "8vh", alignItems: "center" }}
            class="card OfferCard"
          >
            <i style={{ fontSize: "2vw" }} class="bi bi-alipay"></i>
          </div>

          <div style={{ marginTop: "1vh", marginLeft: ".9vw" }}>
            <h6 style={{ fontSize: "10px" }}>Pay Later</h6>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Offers;
