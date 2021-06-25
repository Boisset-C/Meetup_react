import classes from "./Card.module.css";

//Card components can wrap tags by passing a prop in between the divs with the built in prop children
function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;
