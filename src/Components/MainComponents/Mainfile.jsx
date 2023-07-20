import Navbar from "../Navbar/Navbar";
import SideNavbar from "../Navbar/SideNavbar";
import Navbar1 from "../Navbar/Navbar1";
import Searchbox from "../SearchBox/Searchbox";
import Offers from "../Offers/Offers";
import OfferCards from "../Cards/OfferCards";
import Footer from "../Footer/Footer";
import Footer1 from "../Footer/Footer1";
import Footer2 from "../Footer/Footer2";
import Footer3 from "../Footer/Footer3";
import Sport from "../SportNavbar/Sport";

function MainFile() {
  function SideBox() {
    let x = document.getElementById("Sidenavbar");
    if ((x.style.display = "none")) {
      x.style.display = "block";
      console.log(x);
    } else if ((x.style.display = "block")) {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }

  return (
    <div style={{ position: "relative" }}>
      <Navbar SideBox={SideBox} />
      <div id="Sidenavbar" style={{ marginLeft: "79vw", display: "none" }}>
        <SideNavbar />
      </div>
      <div
        style={{
          position: "absolute",
          top: "0",
          marginTop: "10vh",
          zIndex: "-1",
        }}
      >
        <Navbar1 />
        <Searchbox />
        <Offers />
        <OfferCards />
        <Footer />
        <Footer1 />
        <Footer2 />
        <Footer3 />
      </div>
    </div>
  );
}

export default MainFile;
