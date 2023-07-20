import React from "react";
import Navbar from "../Navbar/Navbar";
import Navbar1 from "../Navbar/Navbar1";
import Searchbox from "../SearchBox/Searchbox";
import OfferCards from "../Cards/OfferCards";
import Offers from "../Offers/Offers";
import Footer from "../Footer/Footer";
import Footer2 from "../Footer/Footer2";
import Footer3 from "../Footer/Footer3"
import Footer1 from "../Footer/Footer1"

function Offer() {
  return (
    <div>
      <Navbar />
      <Navbar1 />
      <Searchbox />
      <Offers />
          <OfferCards />
          <Footer />
          <Footer1 />
          <Footer2 />
          <Footer3/>
    </div>
  );
}

export default Offer;
