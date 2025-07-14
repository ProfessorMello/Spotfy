import React from "react";

const Artista = () => {
  return (
    <div className="p-single-item text-verde-50 hover:bg-verde-900 single-item flex flex-col items-center gap-2.5 rounded-xl px-4 transition duration-600">
      {/* Colocando o group aqui */}
      <div className="group relative">
        <img
          className="max-w-image-artist-w max-h-image-artist-h aspect-square rounded-xl object-cover"
          src="https://upload.wikimedia.org/wikipedia/pt/f/f6/Capa_de_Faded_%28Alan_Walker%29.png"
          alt="Perfil do artista"
        />

        {/* Ícone que aparece sobre a imagem */}
        <i className="bi bi-play-circle-fill right-spotify bottom-spotify from-verde-300 to-verde-600 text-icone-play icone absolute translate-y-2 bg-gradient-to-r bg-clip-text text-transparent opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"></i>
      </div>

      <p className="font-sigle-item-title text-spotify-16 line-clamp-2 w-full text-center break-all">
        Faded
      </p>
      <p className="text-center">Alan Walker</p>
    </div>
  );
};

export default Artista;
