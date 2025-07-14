import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-5 py-2">
      <a href="/">
        <img
          className="w-10"
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png"
          alt="Logo do Spotfy"
        />
      </a>
      <a href="/" className="font-spotify text-3xl font-bold hover:underline">
        Spotify
      </a>
    </header>
  );
};

export default Header;
