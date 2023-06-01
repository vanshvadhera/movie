import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMovie from "./Components/aboutMovie/AboutMovie";
import LandingPage from "./Components/LandingPage/LandingPage";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/aboutMovie" element={<AboutMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
