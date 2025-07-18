import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Artistas from "./pages/Artistas";
import NotFound from "./pages/NotFound";
import Musicas from "./pages/Musicas";
import ArtistaUnico from "./pages/ArtistaUnico";
import MusicaUnica from "./pages/MusicaUnica";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artistas" element={<Artistas />} />
          <Route path="/musicas" element={<Musicas />} />
          <Route path="/artistas/:id" element={<ArtistaUnico />} />
          <Route path="/musicas/:id" element={<MusicaUnica />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
