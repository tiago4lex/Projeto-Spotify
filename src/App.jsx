import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HeaderNav from "./components/HeaderNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import Artist from "./pages/Artist";
import Song from "./pages/Song";
import Songs from "./pages/Songs";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="sidebar-container">
        <Sidebar />
        <div className="main-container">
          <HeaderNav />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/artists" element={<Artists />} />
              <Route path="/artist/:id" element={<Artist />} />
              <Route path="/songs" element={<Songs />} />
              <Route path="/song/:id" element={<Song />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>

    // <BrowserRouter>
    //   <div>
    //     <Header />
    //   </div>
    //     <div>
    //       <Sidebar />
    //     </div>

    //     <div className="header-nav">
    //       <HeaderNav />
    //     </div>

    //   <div className="main-content">
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/artists" element={<Artists />} />
    //       <Route path="/artist/:id" element={<Artist />} />
    //       <Route path="/songs" element={<Songs />} />
    //       <Route path="/song/:id" element={<Song />} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>
  );
};

export default App;
