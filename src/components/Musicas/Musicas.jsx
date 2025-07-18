import React from "react";
import ListaMusicas from "./ListaMusicas";
import { Link } from "react-router-dom";

const Musicas = () => {
  return (
    <section className="flex flex-col gap-2.5">
      <header className="flex items-center justify-between">
        <p className="text-2xl font-bold">Músicas populares</p>
        <Link to="/musicas" className="hover:underline">
          Mostrar tudo
        </Link>
      </header>
      {/* Lista de artistas */}
      <ListaMusicas />
    </section>
  );
};

export default Musicas;
