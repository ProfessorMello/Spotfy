import React from "react";
import Artistas from "./Artistas";
import ListaArtistas from "./ListaArtistas";
import Musicas from "./Musicas";

const Main = () => {
  return (
    <main className="from-verde-900 to-verde-1000 main mx-2.5 rounded-2xl bg-linear-to-b p-5">
      {/* Artistas */}
      <Artistas />
      {/* Músicas */}
      <Musicas />
    </main>
  );
};

export default Main;
