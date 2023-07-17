import React from "react";
import Image from "../Gallery/play-credit-card---monthly-offer-rblplmn222.jpg";
import Image1 from "../Gallery/play-credit-card---welcome-offer-rblplwl222.jpg";
import Image2 from "../Gallery/sbi-inr-500-off-on-signature-credit-card-sbi0613.jpg";
import Image3 from "../Gallery/rblmon1216.jpg";
import Image4 from "../Gallery/rbl-bank-younique-credit-card-offer-rblyouc520.jpg";
import Image5 from "../Gallery/rbl-bank-younique-credit-card-offer-rblyouc520.jpg";
import Image6 from "../Gallery/scapia-federal-bank-credit-card-offer-scapia0723.png";
import Image7 from "../Gallery/yes-private-credit-card-offer-yespr0917.jpg";
import Image8 from "../Gallery/aurum-credit-card-offer-sbispr0420.jpg";
import Image9 from "../Gallery/axis-bank-miles-and-more-credit-card-offer-axsmm0623.jpg";
import Image10 from "../Gallery/federal-bank-credit-card-offer-fedcc0722.jpg";
import Image11 from "../Gallery/idfc-first-bank-private-credit-card-offer-idfccc0921.avif";
import Image12 from "../Gallery/dbs-bank-credit-card-offer-dbscc0623.avif";
import Image13 from "../Gallery/indusind-bank-nexxt,-iconia,-duo,-intermiles-credit-card-offer-indbogo.jpg";
import Image14 from "../Gallery/sbi-inr-500-off-on-signature-credit-card-sbi0613.jpg";
import Image15 from "../Gallery/onecard-offer-onecc1121.jpg";
import Image16 from "../Gallery/visa-infinite-program-vip0116.avif";
import Image17 from "../Gallery/yes-first-and-yes-premia-credit-card-25-off-yes0516.jpg";
import Image18 from "../Gallery/hdfc-bank-diners-club-privilege-credit-card-offer-hdfcdz0623.jpg";
import Image19 from "../Gallery/icici-bank-25percent-discount-offer-icicicc520.jpg";
import Image20 from "../Gallery/indusind-bank-super-premium-and-premium-credit-cards-offer-indspc0523.jpg";
import Image21 from "../Gallery/visa-blockbuster-weekends-offer-vsbogo1111.jpg";
import Image22 from "../Gallery/hsbc-saturday-offer-hsbc0815.jpg";
import Image23 from "../Gallery/icici-bank-complimentary-offer-iciccom520.jpg";
import Image24 from "../Gallery/indusind-bank-credit-card-assured-movie-ticket-offer-indam0523.jpg";
import Image25 from "../Gallery/au-credit-card-offer-aucc1221.jpg";
import Image26 from "../Gallery/axis-burgundy-private-and-reserve-credit-card-offer-axscc1219.avif";
import Image27 from "../Gallery/bank-of-maharashtra-credit-card-offer-bomh0423.jpg";
import Image28 from "../Gallery/axis-magnus-credit-card-offer-axismg0919.avif";
import Image29 from "../Gallery/axis-select-credit-card-offer-axsscc0420.jpg";
import Image30 from "../Gallery/fi-credit-card-offer-fi0322.jpg";
import Image31 from "../Gallery/axis-neo-credit-card-10percent-offer-axsneo0415.jpg";
import Image32 from "../Gallery/rbl-bank-supercard-offer-rbl0117.jpg";
import Image33 from "../Gallery/idbi-bank-credit-card-offer-idbicc0623.jpg";
import Image34 from "../Gallery/rbl-bank-buy-one-get-one-offer-on-select-credit-cards-rbl0614.jpg";
import Image35 from "../Gallery/sbisimclik.avif";
import Image36 from "../Gallery/idfc-first-bank-debit-card-offer-idfcdc0623.avif";
import Image37 from "../Gallery/dbs0514.jpg";
import Image38 from "../Gallery/dcb-bank-debit-card-offer-dcbdc0423.jpg";
import Image39 from "../Gallery/indusind-pioneer-and-indus-grande-debit-card-offer-visin0918.jpg";
import Image40 from "../Gallery/visin0511.avif";
import Image41 from "../Gallery/bank-of-india-debit-card-offer-boidc0623.jpg";
import Image42 from "../Gallery/federal-bank-debit-card-offer-feddc0722.jpg";
import Image43 from "../Gallery/rbl-bank-debit-card-offer-rbldc0422.jpg";
import Image44 from "../Gallery/utkarsh-small-finance-bank-debit-card-offer-usfb0123.jpg";
import Image45 from "../Gallery/yes-bank-debit-card-offer-yes1216.avif";
import Image46 from "../Gallery/au-small-finance-bank-limited-debit-card-offer-auroyl1219.jpg";
import Image47 from "../Gallery/axis-bank-buy-one-get-one-offer-on-burgundy-debit-cards-axis0814.jpg";
import Image48 from "../Gallery/1-get-1-debit-card-offer-eqts1117.jpg";
import Image49 from "../Gallery/axis-bank-edebit-card-offer-axsvrdc420.jpg";
import Image50 from "../Gallery/icici-debit-card-offer-icicor0813.jpg";
import Image51 from "../Gallery/axis-delight-debit-card-offer-axisdl1120.jpg";
import Image52 from "../Gallery/axis-value-plus-debit-card-offer-axisvp0619.jpg";
import Image53 from "../Gallery/citibank-non-movie-offer-citi0317.avif";
import Image54 from "../Gallery/gsc-bank-platinum-debit-card-offer-gscb1222.jpg";
import Image55 from "../Gallery/kotak-bank-everyday-rupay-debit-card-kotak0922.jpg";
import Image56 from "../Gallery/axis-bank-priority-debit-card-offer-axispr0317.jpg";
import Image57 from "../Gallery/axis-bank-titanium-rewards-offer-axstit0417.jpg";
import Image58 from "../Gallery/citibank-buy-one-get-one-offer-on-citigold-citigold-private-client--citi-priority-debit-cards-citibogodb.jpg";
import Image59 from "../Gallery/flat-inr-50--on-min-purchase-of-2-ticket-movies50.jpg";
import Image60 from "../Gallery/lazypay-cashback-offer-lazypay0623.avif";
import "../Components/Cards.css";
function OfferCards() {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#EDEDED",
        marginTop: "4vh",
      }}
    >
      <br />
      <div
        style={{
          width: "100%",
          backgroundColor: "#EDEDED",
          display: "flex",
          gap: "2vw",
          justifyContent: "center",
        }}
      >
        <div 
          class="card" id="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                PLAY CREDIT CARD-MONT...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "100%",
              position: "absolute",
              top: "0",
              height: "30vh",
              marginTop: "2vh",
            }}
            className="Hover"
            id="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                Get INR 500/-off on tickets + INR 100/-off on F&B every month on
                BookMyShow using PLAY Credit Card.*T&C Apply.
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>

        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image1} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                PLAY CREDIT CARD-WELC...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              height: "30vh",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                PLAY CREDIT CARD-WELCOME OFFER
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "6vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>

        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image2} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>SBI</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                SBI SIGNATURE/ELITE CRED...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              height: "30vh",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                Get 2 free movie ticket or INR 500 off whichever is less with
                SBI signature/Elite credit cards
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "3vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>

        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image3} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>

        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image4} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: "4vh",
          justifyContent: "center",
          gap: "2vw",
        }}
      >
        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image5} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>
        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image6} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>
        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image7} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>
        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image8} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>
        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image9} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
      <br />
      <div
        style={{
          width: "100%",
          backgroundColor: "#EDEDED",
          display: "flex",
          gap: "2vw",
          justifyContent: "center",
        }}
      >
        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image10} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                PLAY CREDIT CARD-MONT...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                Get INR 500/-off on tickets + INR 100/-off on F&B every month on
                BookMyShow using PLAY Credit Card.*T&C Apply.
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>

        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image11} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                PLAY CREDIT CARD-WELC...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                PLAY CREDIT CARD-WELCOME OFFER
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "6vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>

        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image12} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>SBI</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                SBI SIGNATURE/ELITE CRED...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                Get 2 free movie ticket or INR 500 off whichever is less with
                SBI signature/Elite credit cards
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "3vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>

        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image13} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>

        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image14} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: "4vh",
          justifyContent: "center",
          gap: "2vw",
        }}
      >
        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image15} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>
        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image16} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>
        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image17} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>
        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image18} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>
        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image19} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
      <br />
      <div
        style={{
          width: "100%",
          backgroundColor: "#EDEDED",
          display: "flex",
          gap: "2vw",
          justifyContent: "center",
        }}
      >
        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image20} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                PLAY CREDIT CARD-MONT...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                Get INR 500/-off on tickets + INR 100/-off on F&B every month on
                BookMyShow using PLAY Credit Card.*T&C Apply.
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>

        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image21} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                PLAY CREDIT CARD-WELC...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                PLAY CREDIT CARD-WELCOME OFFER
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>

        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image22} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>SBI</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                SBI SIGNATURE/ELITE CRED...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                Get 2 free movie ticket or INR 500 off whichever is less with
                SBI signature/Elite credit cards
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "4vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>

        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image23} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "9vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>

        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image24} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "9vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: "4vh",
          justifyContent: "center",
          gap: "2vw",
        }}
      >
        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image25} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>
        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image26} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>
        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image27} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>
        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image28} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>
        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image29} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
      <br />

      <div
        style={{
          width: "100%",
          backgroundColor: "#EDEDED",
          display: "flex",
          gap: "2vw",
          justifyContent: "center",
        }}
      >
        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image30} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                PLAY CREDIT CARD-MONT...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                Get INR 500/-off on tickets + INR 100/-off on F&B every month on
                BookMyShow using PLAY Credit Card.*T&C Apply.
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>

        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image31} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                PLAY CREDIT CARD-WELC...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                PLAY CREDIT CARD-WELCOME OFFER
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "7vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>

        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image32} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>SBI</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                SBI SIGNATURE/ELITE CRED...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                Get 2 free movie ticket or INR 500 off whichever is less with
                SBI signature/Elite credit cards
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "4vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>

        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image33} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "9vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>

        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image34} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "9vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: "4vh",
          justifyContent: "center",
          gap: "2vw",
        }}
      >
        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image35} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>
        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image36} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>
        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image37} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>
        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image38} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>
        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image39} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
      <br />
      <div
        style={{
          width: "100%",
          backgroundColor: "#EDEDED",
          display: "flex",
          gap: "2vw",
          justifyContent: "center",
        }}
      >
        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image40} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                PLAY CREDIT CARD-MONT...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                Get INR 500/-off on tickets + INR 100/-off on F&B every month on
                BookMyShow using PLAY Credit Card.*T&C Apply.
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>

        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image41} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                PLAY CREDIT CARD-WELC...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                PLAY CREDIT CARD-WELCOME OFFER
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "6vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>

        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image42} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>SBI</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                SBI SIGNATURE/ELITE CRED...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                Get 2 free movie ticket or INR 500 off whichever is less with
                SBI signature/Elite credit cards
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "3vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>

        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image43} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>

        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image44} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: "4vh",
          justifyContent: "center",
          gap: "2vw",
        }}
      >
        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image45} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>
        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image46} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>
        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image47} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>
        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image48} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>
        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image49} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
      <br />
      <div
        style={{
          width: "100%",
          backgroundColor: "#EDEDED",
          display: "flex",
          gap: "2vw",
          justifyContent: "center",
        }}
      >
        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image50} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                PLAY CREDIT CARD-MONT...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                Get INR 500/-off on tickets + INR 100/-off on F&B every month on
                BookMyShow using PLAY Credit Card.*T&C Apply.
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>

        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image51} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                PLAY CREDIT CARD-WELC...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                PLAY CREDIT CARD-WELCOME OFFER
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "7vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>

        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image52} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>SBI</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                SBI SIGNATURE/ELITE CRED...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                Get 2 free movie ticket or INR 500 off whichever is less with
                SBI signature/Elite credit cards
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "4vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>

        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image53} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>

        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image54} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: "4vh",
          justifyContent: "center",
          gap: "2vw",
        }}
      >
        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image55} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>
        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image56} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>
        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image57} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>
        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image58} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>
        <div
          class="card"
          style={{
            width: "14.5vw",
            height: "57vh",
            position: "relative",
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={Image59} class="card-img-top" alt="#" />

            <div class="card-body">
              <div
                style={{
                  width: "5vw",
                  height: "5vh",
                  borderStyle: "solid",
                  textAlign: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  marginTop: "34vh",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                <h5>PLAY</h5>
              </div>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                RBL BANK POPCORN,FUN+,...
              </h6>
              <h6
                style={{
                  width: "14vw",
                  fontSize: "13px",
                  color: "#818282",
                  fontWeight: "400",
                  marginTop: "6vh",
                }}
              >
                Valid till{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  31 Mar 2024 23:59
                </span>
              </h6>
            </div>
          </a>
          <div
            style={{
              textAlign: "center",
              width: "15vw",
              position: "absolute",
              top: "0",
              marginTop: "2vh",
            }}
            className="Hover"
          >
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
              <div
                style={{
                  borderTopStyle: "solid",
                  borderTopColor: "white",
                  width: "14.3vw",
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "2vh",
                  width: "12.5vw",
                  marginLeft: "1vw",
                }}
              >
                RBL Bank Monthly Offer
              </p>
              <h2
                style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
              >
                AVAILABLE FOR
              </h2>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8vh",
                }}
              >
                <i class="bi bi-laptop"></i>
                <i class="bi bi-tablet"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
      <br />
      <div
        class="card"
        style={{
          width: "14.5vw",
          height: "57vh",
          position: "relative",
          marginLeft: "9vw",
        }}
      >
        <a href="#" style={{ textDecoration: "none" }}>
          <img src={Image60} class="card-img-top" alt="#" />

          <div class="card-body">
            <div
              style={{
                width: "5vw",
                height: "5vh",
                borderStyle: "solid",
                textAlign: "center",
                borderRadius: "50%",
                position: "absolute",
                top: "0",
                marginTop: "34vh",
                backgroundColor: "white",
                borderColor: "white",
              }}
            >
              <h5>PLAY</h5>
            </div>
            <h6
              style={{
                width: "14vw",
                fontSize: "15px",
                color: "black",
                fontWeight: "400",
              }}
            >
              RBL BANK POPCORN,FUN+,...
            </h6>
            <h6
              style={{
                width: "14vw",
                fontSize: "13px",
                color: "#818282",
                fontWeight: "400",
                marginTop: "6vh",
              }}
            >
              Valid till{" "}
              <span
                style={{
                  fontSize: "13px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                31 Mar 2024 23:59
              </span>
            </h6>
          </div>
        </a>
        <div
          style={{
            textAlign: "center",
            width: "15vw",
            position: "absolute",
            top: "0",
            marginTop: "2vh",
          }}
          className="Hover"
        >
          <a href="#" style={{ textDecoration: "none", color: "white" }}>
            <h1 style={{ fontSize: "15px" }}>ABOUT OFFER</h1>
            <div
              style={{
                borderTopStyle: "solid",
                borderTopColor: "white",
                width: "14.3vw",
              }}
            ></div>
            <p
              style={{
                fontSize: "13px",
                marginTop: "2vh",
                width: "12.5vw",
                marginLeft: "1vw",
              }}
            >
              RBL Bank Monthly Offer
            </p>
            <h2
              style={{ fontSize: "13px", marginTop: "7vh", color: "#818282" }}
            >
              AVAILABLE FOR
            </h2>
            <div
              style={{
                gap: "20px",
                display: "flex",
                justifyContent: "center",
                marginTop: "7vh",
              }}
            >
              <i class="bi bi-laptop"></i>
              <i class="bi bi-tablet"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default OfferCards;
