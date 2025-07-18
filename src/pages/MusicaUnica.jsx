import React from "react";
import { useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";

const MusicaUnica = () => {
  const { id } = useParams();
  const musica = songsArray.find((item) => item.id === parseInt(id));

  if (!musica) {
    return (
      <main className="from-verde-900 to-verde-1000 main mx-2.5 rounded-2xl bg-linear-to-b p-5">
        Musica não encontrada
      </main>
    );
  }

  return (
    <main className="from-verde-900 to-verde-1000 main mx-2.5 rounded-2xl bg-linear-to-b p-5">
      <div className="p-6 text-center text-white">
        <h1 className="mb-4 text-3xl font-bold">{musica.name}</h1>
        <img
          src={musica.image}
          alt={`Imagem de ${musica.name}`}
          className="mx-auto w-full max-w-xs rounded-xl"
        />
        <p className="mt-4">ID: {musica.id}</p>
      </div>
    </main>
  );
};

export default MusicaUnica;
