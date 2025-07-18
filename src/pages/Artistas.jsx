import React from "react";
import Artista from "../components/Artistas/Artista";
import { artistArray } from "../assets/database/artists";
import TodosArtistas from "../components/Artistas/TodosArtistas";

const Artistas = () => {
  const todosArtistas = artistArray;
  return (
    <main className="from-verde-900 to-verde-1000 main mx-2.5 rounded-2xl bg-linear-to-b p-5">
      <TodosArtistas />
    </main>
  );
};

export default Artistas;
