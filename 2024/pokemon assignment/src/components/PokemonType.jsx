const PokemonType = (props) => {
  return (
    <>
      <span className={props.className} style={props.style}>
        {props.element}
      </span>
    </>
  );
};
export default PokemonType;
