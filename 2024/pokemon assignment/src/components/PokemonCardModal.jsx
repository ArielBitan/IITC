import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState, useEffect } from "react";
import Card from "./Card";
import PokemonDetails from "../pages/PokemonDetails";

import { fetchPokemonSpeciesData } from "../Api";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: "95%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "1rem",
  overflowY: "auto",
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const pokemon = props.pokemonData;
  const [backgroundColor, setBackgroundColor] = useState("");

  const getGradientBackground = (color) => {
    return `linear-gradient(-30deg, ${color}, rgb(150 , 150, 150))`;
  };

  useEffect(() => {
    const fetchBackgroundColor = async () => {
      try {
        const data = await fetchPokemonSpeciesData(pokemon.id);
        console.log(data);

        const bgc = data.color.name;
        setBackgroundColor(bgc);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };
    fetchBackgroundColor();
  }, []);
  return (
    <div>
      <div onClick={handleOpen}>
        <Card
          key={pokemon.id}
          id={pokemon.id}
          types={pokemon.types.map((type) => type.type.name)}
          name={pokemon.name}
          sprite={pokemon.sprites.front_default}
        />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            background: getGradientBackground(backgroundColor),
          }}
        >
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <PokemonDetails
              key={pokemon.id}
              id={pokemon.id}
              types={pokemon.types.map((type) => type.type.name)}
              name={pokemon.name}
              sprite={pokemon.sprites.front_default}
            />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
