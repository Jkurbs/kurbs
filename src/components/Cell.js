import "../styles/Cell.css";
import { useMediaQuery } from "react-responsive";
import { Grid, Row, Col } from "react-flexbox-grid";

function Cell(props) {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });

  if (props.isEmpty) {
    return (
      <Grid
        id="cell"
        style={{
          paddingLeft: 20,
          top: props.position.top,
          left: props.position.left ?? 0,
          right: props.position.right ?? 0,
          height: isTabletOrMobile ? 0 : 0,
        }}
        fluid
      >
        <Row>
          <div id={isTabletOrMobile ? "empty-square-mobile" : "empty-square"} />
          <Col sm={9}>
            <div id="emptyText" />
            <div id="emptyText" />
          </Col>
        </Row>
      </Grid>
    );
  } else {
    return (
      <div
        id="cell"
        style={{
          zIndex: 1,
          top: props.position.top,
          left: props.position.left,
          right: props.position.right,
          height: isTabletOrMobile ? 30 : 50,
        }}
      >
        <img src={props.image} className="image" />
        <span
          id="description"
          style={{ fontSize: isTabletOrMobile ? "1.3vh" : "1.2vw" }}
        >
          {props.description}
        </span>
      </div>
    );
  }
}

export default Cell;
