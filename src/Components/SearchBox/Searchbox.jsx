import React from "react";

function Searchbox() {
  return (
    <div style={{ width: "100%", marginTop: "3vh" }}>
      <form
        style={{ marginLeft: "10vw", position: "relative" }}
        class="form-inline my-2 my-lg-0"
      >
        <input
          style={{ width: "23vw" }}
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search for Offers by Name or Bank"
          aria-label="Search"
        />
        <i
          style={{ position: "absolute", top: "0", margin: "1vh 21vw" }}
          class="bi bi-search"
        ></i>
      </form>
    </div>
  );
}

export default Searchbox;
