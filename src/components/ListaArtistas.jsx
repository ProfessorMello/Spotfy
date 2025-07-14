import React from "react";
import Artista from "./Artista";

const ListaArtistas = () => {
  return (
    <div className="grid max-w-7xl grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-2.5">
      <Artista />
      <Artista />
      <Artista />
      <Artista />
      <Artista />
    </div>
  );
};

export default ListaArtistas;
