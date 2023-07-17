import React from "react";

function Footer1() {
  return (
    <div>
      <div style={{ width: "100%", height: "5vh" }}>
        <a
          style={{
            textDecoration: "none",
            marginLeft: "7vw",
            color: "#6E6E6E",
          }}
          href="#"
        >
          online Tickets - offers
        </a>
      </div>
      <div
        style={{ width: "100%", backgroundColor: "#EDEDED", height: "10vh" }}
      >
        <div
          style={{
            fontSize: "13px",
            width: "82%",
            marginLeft: "7vw",
          }}
        >
          <h1 style={{ fontSize: "15px", color: "#6E6E6E" }}>Privacy Notes</h1>
          By using www.bookmyshow.com(our website), you are fully accepting the
          Privacy Policy available at
          <a style={{ color: "red", textDecoration: "none" }} href="/privacy">
            https://bookmyshow.com/privacy
          </a>{" "}
          governing your access to Bookmyshow and provision of services by
          Bookmyshow to you. If you do not accept terms mentioned in the
          <a style={{ color: "red", textDecoration: "none" }} href="/privacy">
            Privacy Policy
          </a>
          , you must not share any of your personal information and immediately
          exit Bookmyshow.
        </div>
      </div>
      <div style={{ width: "100%", height: "60px", backgroundColor: "black" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1vw",
            justifyContent: "center",
          }}
        >
          <div style={{ marginTop: "1.7vh" }}>
            <i
              style={{ color: "white", fontSize: "20px" }}
              class="bi bi-tree-fill"
            ></i>
          </div>
          <div style={{ color: "white", marginTop: "2vh" }}>List your Show</div>
          <div style={{ color: "white", marginTop: "2vh" }}>
            Got a show, event, activity or a great experience? Partner with us
            &amp; get listed on BookMyShow
          </div>
          <button
            style={{
              backgroundColor: "orange",
              color: "white",
              marginLeft: "12vw",
              marginTop: "2vh",
              borderColor: "orange",
              height: "5vh",
            }}
          >
            Contact today!
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          gap: "5vw",
          justifyContent: "center",
          backgroundColor: "#292828",
        }}
      >
        <a style={{ textDecoration: "none", color: "#6E6E6E" }} href="#">
          <div style={{ textAlign: "center" }}>
            <i
              style={{ fontSize: "50px", color: "white" }}
              class="bi bi-person-check"
            ></i>
            <div>24/7 CUSTOMER CARE</div>
          </div>
        </a>
        <a style={{ textDecoration: "none", color: "#6E6E6E" }} href="#">
          <div style={{ textAlign: "center" }}>
            <i
              style={{ fontSize: "50px", color: "white" }}
              class="bi bi-bookmark-check-fill"
            ></i>
            <div>RESEND BOOKING CONFIRMATION</div>
          </div>
        </a>
        <a style={{ textDecoration: "none", color: "#6E6E6E" }} href="#">
          <div style={{ textAlign: "center" }}>
            <i
              style={{ fontSize: "50px", color: "white" }}
              class="bi bi-newspaper"
            ></i>
            <div>SUBSCRIBE TO THE NEWSLETTER</div>
          </div>
        </a>
          </div>
          
        
    </div>
  );
}

export default Footer1;
