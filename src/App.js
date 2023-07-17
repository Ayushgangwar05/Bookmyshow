import "./App.css";
import Navbar from "./Components/Navbar";
import Navbar1 from "./Components/Navbar1";
import Offers from "./Components/Offers";
import Searchbox from "./Components/Searchbox";
import OfferCards from "./Components/OfferCards";
import Footer from "./Components/Footer";
import Footer1 from "./Components/Footer1";
import Footer2 from "./Components/Footer2";
import Footer3 from "./Components/Footer3";
import SideNavbar from "./Components/SideNavbar";



function App() {
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

export default App;
