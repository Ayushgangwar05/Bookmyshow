import React from "react";

import { Routes, Route } from "react-router-dom";
import Movies from "./Movies";

function AllRouter() {
  return (
    <div>
      <Routes>
        <Route path="/Movies" element={<Movies />} />
        
      </Routes>
    </div>
  );
}

export default AllRouter;
