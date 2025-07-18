import React from "react";
import Musica from "./Musica";
import { songsArray } from "../../assets/database/songs";

const ListaMusicas = () => {
  const musicasPopulares = songsArray.slice(0, 15);
  return (
    <div className="grid max-w-7xl grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-2.5">
      {musicasPopulares.map((music) => (
        <Musica key={music.id} music={music} />
      ))}
    </div>
  );
};

export default ListaMusicas;
