import React from "react";

const AboutPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">
        About This Project
      </h1>
      <p className="text-lg mb-4">
        This project is a part of my assignment where I am building a Pokémon
        website to showcase and explore various Pokémon using the{" "}
        <span className="font-semibold">PokeAPI</span>. The goal was to create
        an interactive platform that displays Pokémon cards and their detailed
        stats in an organized and user-friendly manner.
      </p>
      <p className="text-lg mb-4">
        The website features:
        <ul className="list-disc ml-6">
          <li className="mb-2">
            A homepage with a grid of Pokémon cards fetched dynamically from the
            PokeAPI.
          </li>
          <li className="mb-2">
            Clickable Pokémon cards that lead to a detailed view of each
            Pokémon.
          </li>
          <li className="mb-2">
            In progress - A form page to add custom Pokémon to the database (for
            future enhancements).
          </li>
        </ul>
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">About Me</h2>
      <p className="text-lg">
        My name is <span className="font-semibold">Ariel</span>, and I’m working
        on this project alone as part of my coursework. The project allows me to
        practice my React, routing, and API-fetching skills while also allowing
        me to get creative with styling and designing an interactive website.
      </p>
    </div>
  );
};

export default AboutPage;
