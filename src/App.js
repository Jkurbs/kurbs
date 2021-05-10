import logo from "./assets/logo.svg";
import play from "./assets/play-48.png";
import Cell from "./components/Cell";

import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logoContainer">
          <img src={logo} className="logo" alt="logo" />
          <a className="logoText" href>
            Kurbs
          </a>
        </div>
      </header>

      <div id="headline">
        <div id="headline-container">
          <div>
            <h1 id="headline-title">
              A smart curation
              <br />
              <h1 id="headline-title-backgroundImage">of thoughts.</h1>
            </h1>
            <h4 id="headline-description">
              Many Entrepreneurs and Students
              <br />
              uses Kurbs to speedily search,
              <br />
              organize and discuss thoughts.
            </h4>
          </div>

          {/* Moving Graphics */}
          <div style={{ width: "50%" }}>
            <Cell
              image={logo}
              hasTitle={false}
              description={"This is the description."}
            />
          </div>
        </div>

        <div className="call-to-action-container">
          <div className="call-to-action-left">
            <a href="/" id="play-text">
              Watch the video
            </a>
            <img id="play-button" src={play} alt="Watch the video" />
          </div>

          <div className="call-to-action-right">
            <button
              id="request-button"
              className="border-gradient"
              // title="Request access"
              // value="Request access"
            >
              <a id="call-to-action-right_text">Request Access</a>
            </button>
          </div>
        </div>

        <div className="details-container">
          <div className="details-one">
            <div id="details-one-text-container">
              <a
                id="details-one-text"
                style={{ fontSize: 40, alignSelf: "center" }}
              >
                Keep track of everything <br />
                with the desktop app.
              </a>
            </div>

            <div id="details-one-graphic-container"></div>
          </div>

          <div className="details-one details-two">
            <div id="details-two-graphic-container">
              <h4 style={{ fontSize: 25, color: "white", textAlign: "center" }}>
                The app brings the infinite to a finite valuable set of aswers
                and ressources. Saving you time and money.
              </h4>
            </div>
            <div id="details-two-text-container">
              <h2>
                The best ideas from the best minds, <br /> from people you
                follow,
                <br />
                books and ressources.
                <br />
                Save valuable time and money searching for it.
              </h2>
              <div
                style={{
                  flexDirection: "row",
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  spacing: 60,
                }}
              >
                <img
                  src={logo}
                  className="people_image_extrasmall"
                  alt="logo"
                />
                <img src={logo} className="people_image_medium" alt="logo" />
                <img src={logo} className="people_image_big" alt="logo" />
                <img src={logo} className="people_image_large" alt="logo" />
                <img src={logo} className="people_image_big" alt="logo" />
                <img src={logo} className="people_image_medium" alt="logo" />

                <img
                  src={logo}
                  className="people_image_extrasmall"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
