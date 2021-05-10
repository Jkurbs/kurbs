import "../styles/Cell.css";

function Cell(props) {
  return (
    <div id="cell">
      <img src={props.image} className="logo" alt="logo" />
      {props.hasTitle ? <h3>{props.title}</h3> : null}
      <a>{props.description}</a>
    </div>
  );
}

export default Cell;
