const PokemonType = (props) => {
  return (
    <>
      <span className={props.className} style={props.style}>
        {props.element.charAt(0).toUpperCase() + props.element.slice(1)}
      </span>
    </>
  );
};
export default PokemonType;
