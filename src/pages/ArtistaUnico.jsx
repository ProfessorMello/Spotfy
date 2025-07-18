import React from "react";
import { useParams } from "react-router-dom";
import { artistArray } from "../assets/database/artists";

const ArtistaUnico = () => {
  const { id } = useParams();
  const artista = artistArray.find((item) => item.id === parseInt(id));

  if (!artista) {
    return (
      <main className="from-verde-900 to-verde-1000 main mx-2.5 rounded-2xl bg-linear-to-b p-5"></main>
    );
  }

  return (
    <main className="from-verde-900 to-verde-1000 main mx-2.5 rounded-2xl bg-linear-to-b p-5">
      <div className="p-6 text-center text-white">
        <h1 className="mb-4 text-3xl font-bold">{artista.name}</h1>
        <img
          src={artista.banner}
          alt={`Banner de ${artista.name}`}
          className="mx-auto w-full max-w-2xl rounded-xl"
        />
        <p className="mt-4">ID: {artista.id}</p>
      </div>
    </main>
  );
};

export default ArtistaUnico;
