import React from "react";

function Footer() {
  return (
    <div style={{ backgroundColor: "#EDEDED", width: "100%", height: "57vh" }}>
      <h6 style={{ textAlign: "center", paddingTop: "5vh", fontSize: "14px" }}>
        A Plethora of Offers and Discounts at BookMyShow!
      </h6>
      <br />
      <div style={{ width: "100%" }}>
        <p style={{ width: "83%", fontSize: "13px", margin: "auto" }}>
          If you are searching for some discount offers on movie tickets, then
          BookMyShow is the place for you! Browse through our huge array of
          movie ticket offers and save big every time you book movies tickets
          with us. Discover these special offers on movie tickets,customized
          especially for you!
        </p>
      </div>
      <ul
        style={{
          width: "100%",
          display: "flex",
          marginTop: "7vh",
          gap: "2vw",
          justifyContent: "center",
        }}
      >
        <li style={{ listStyle: "none" }}>
          <div style={{ fontSize: "13px", color: "#6E6E6E" }}>Card offers</div>

          <div
            style={{
              width: "20vw",
              fontSize: "13px",
              marginTop: "2vh",
              color: "#6E6E6E",
            }}
          >
            There is a gamut of credit and debit card Offers provided by some of
            the leading banks in India like ICICI, RBL, Citi Bank, SBI, Axis
            Bank, HDFC, RBS, IndusInd, HDFC and many more. By availing one of
            these Debit or credit card offers, you can save massively on your
            movie tickets.
          </div>
        </li>
        <li style={{ listStyle: "none" }}>
          <div style={{ fontSize: "13px", color: "#6E6E6E" }}>
            Wallet and recharge offers
          </div>
          <div
            style={{
              width: "20vw",
              fontSize: "13px",
              marginTop: "2vh",
              color: "#6E6E6E",
            }}
          >
            Wallets and online recharge providers also offer great discounts and
            deals on movie ticket booking. Using providers like Freecharge,
            MobiKwik, PayUMoney Payzapp, Ola Money, Pockets by ICICI, and Airtel
            Money while booking movie tickets on our platform, you can get
            instant cashback and discount.
          </div>
        </li>
        <li style={{ listStyle: "none" }}>
          <div style={{ fontSize: "13px", color: "#6E6E6E" }}>
            Cinema Offers
          </div>

          <div
            style={{
              width: "20vw",
              fontSize: "13px",
              marginTop: "2vh",
              color: "#6E6E6E",
            }}
          >
            Cinemas like
            <a style={{ textDecoration: "none", color: "#6E6E6E" }} href="#">
              PVR
            </a>
            and
            <a style={{ textDecoration: "none", color: "#6E6E6E" }} href="#">
              Cinepolis
            </a>
            runs some special offers on movies with BookMyShow. So, here is yet
            another reason why you should book your movie tickets with us!
          </div>
        </li>
        <li style={{ listStyle: "none" }}>
          <div style={{ fontSize: "13px", color: "#6E6E6E" }}>
            Telecom Offers
          </div>
          <div
            style={{
              width: "20vw",
              fontSize: "13px",
              marginTop: "2vh",
              color: "#6E6E6E",
            }}
          >
            We have some special offers for some selected* Vodafone and Idea
            Users. If you are that lucky selected user, then you can get up to
            50% off on your movie tickets. It can't get better than this! Right?
          </div>
        </li>
      </ul>
      <div style={{ color: "#6E6E6E", fontSize: "13px", textAlign: "center" }}>
        BookMyShow offers are designed to delight you! Check them out now,
        there's bound to be one that suits you. Do remember to read Terms and
        Conditions before applying offer code, though!
      </div>
    </div>
  );
}
export default Footer;
