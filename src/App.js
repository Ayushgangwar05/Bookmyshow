import React from "react";
import "./App.css";
import MainFile from "./Components/MainComponents/Mainfile";
import { Route, Routes } from "react-router-dom";
import Movies from "../src/Components/Movies/Movies";

function App() {
  return (
    <div>
      <MainFile />
      <div>
        {/* <Routes>
          <Route path="/Movies" element={<Movies />} />
        </Routes> */}
      </div>
    </div>
  );
}

export default App;
