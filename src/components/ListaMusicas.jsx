import React from "react";
import Musica from "./Musica";

const ListaMusicas = () => {
  return (
    <div className="grid max-w-7xl grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-2.5">
      <Musica />
      <Musica />
      <Musica />
      <Musica />
      <Musica />
      <Musica />
      <Musica />
      <Musica />
      <Musica />
      <Musica />
    </div>
  );
};

export default ListaMusicas;
