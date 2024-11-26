const PokemonType = (props) => {
  return (
    <>
      <span key={props.key} className={props.className} style={props.style}>
        {props.element}
      </span>
    </>
  );
};
export default PokemonType;
