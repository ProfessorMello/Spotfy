import React from "react";

const Artista = () => {
  return (
    <div className="p-single-item text-verde-50 hover:bg-verde-900 single-item flex flex-col items-center gap-2.5 rounded-xl px-4 transition duration-600">
      {/* Colocando o group aqui */}
      <div className="group relative">
        <img
          className="max-w-image-artist-w max-h-image-artist-h aspect-square rounded-full object-cover"
          src="https://akamai.sscdn.co/uploadfile/letras/fotos/5/d/d/9/5dd92d774fe8e768d375a34759f94599.jpg"
          alt="Perfil do artista"
        />

        {/* Ícone que aparece sobre a imagem */}
        <i className="bi bi-play-circle-fill right-spotify bottom-spotify from-verde-300 to-verde-600 text-icone-play icone absolute translate-y-2 bg-gradient-to-r bg-clip-text text-transparent opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"></i>
      </div>

      <p className="font-sigle-item-title text-spotify-16 line-clamp-2 w-full text-center break-all">
        Alan Walker
      </p>
      <p className="text-center">Artista</p>
    </div>
  );
};

export default Artista;
