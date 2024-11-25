import styles from "./Card.module.css";
const Card = (props) => {
  return (
    <>
      <li className={styles.cardElement}>
        <h3>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</h3>
        <div className={styles.cardOverview}>
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
