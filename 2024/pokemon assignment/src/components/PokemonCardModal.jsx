import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import Card from "./Card";
import PokemonDetails from "../pages/PokemonDetails";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const pokemon = props.pokemonData;

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
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <PokemonDetails />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
