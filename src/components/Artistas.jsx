import React from "react";
import ListaArtistas from "./ListaArtistas";

const Artistas = () => {
  return (
    <section className="flex flex-col gap-2.5">
      <header className="flex items-center justify-between">
        <p className="text-2xl font-bold">Artistas populares</p>
        <a href="/" className="hover:underline">
          Mostrar tudo
        </a>
      </header>
      {/* Lista de artistas */}
      <ListaArtistas />
    </section>
  );
};

export default Artistas;
