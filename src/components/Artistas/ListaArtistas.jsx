import React from "react";
import Artista from "./Artista";
import { artistArray } from "../../assets/database/artists";

const ListaArtistas = () => {
  const artistasPopulares = artistArray.slice(0, 5);
  return (
    <div className="grid max-w-7xl grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-2.5">
      {artistasPopulares.map((artist) => (
        <Artista key={artist.id} artist={artist} />
      ))}
    </div>
  );
};

export default ListaArtistas;
