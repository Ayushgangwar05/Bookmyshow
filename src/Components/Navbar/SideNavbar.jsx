import React from "react";

function SideNavbar() {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "20vw",
        height: "100vh",
        boxShadow: "10px 10px 10px 10px",
      }}
    >
      <h1>Hey!</h1>
      <h1 style={{ fontSize: "12px", boxShadow: "0px 5px 5px 0px" }}>
        Unlock special offers & great benefits <a href="#">Login / Register</a>
      </h1>
      <div style={{ textAlign: "center" }}>
        <a href="#">Notifications</a>
      </div>
      <div style={{ textAlign: "center" }}>
        <a href="#">Your Order</a>
      </div>
      <div style={{ textAlign: "center" }}>
        <a href="#">Play credit card</a>
      </div>
      <div style={{ textAlign: "center" }}>
        <a href="#">Help & Support</a>
      </div>
      <div style={{ textAlign: "center" }}>
        <a href="#">Account & Setting</a>
      </div>
      <div style={{ textAlign: "center" }}>
        <a href="#">Rewards</a>
      </div>
      <div style={{ textAlign: "center" }}>
        <a href="#">BookASmile</a>
      </div>
    </div>
  );
}

export default SideNavbar;
