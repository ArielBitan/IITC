import styles from "./Card.module.css";
const Card = (props) => {
  return (
    <>
      <li class="bg-gray-600 p-2 rounded-md">
        <h3>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</h3>
        <div class="flex items-center justify-evenly gap-2">
          {props.types.map((element, index) => (
            <span key={index} className={styles.type}>
              {element}
            </span>
          ))}
          <img src={props.sprite} alt={props.name} />
        </div>
      </li>
    </>
  );
};

export default Card;
