import React, { useEffect, useState } from "react";
import "./styles/App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import $ from "jquery";
import { slide as Menu } from "react-burger-menu";

import {
  images,
  movingGraphics,
  movingGraphicsMobile,
  howDescriptions,
  useDescriptions,
  testimonial,
} from "./App.data";

import play from "./assets/play-48.png";

import search from "./assets/search2x.png";
import collection from "./assets/collections2x.png";
import conversation from "./assets/conversation2x.png";
import { useMediaQuery } from "react-responsive";
import Film from "./components/VideoPlayer";
import Request from "./Request";
import checkmark from "./assets/checkmark-64.png";

import About from "./About";
import { World } from "./components/World";
import testimonialImage from "./assets/testimonial.jpeg";

import Footer from "./components/Footer";

const cacheImages = async (srcArray) => {
  const promises = await srcArray.map((src) => {
    return new Promise(function (resolve, reject) {
      const img = new Image();
      img.src = src;
      img.onload = resolve();
      img.onerror = reject();
    });
  });
  await Promise.all(promises);
};

var text_one_value;
var text_two_value;
var text_three_value;

function App() {
  const isMobile = useMediaQuery({ maxWidth: 1224 });
  return (
    <div className="wrapper">
      <header className="header">
        <div className="menu-container">
          <a
            className={isMobile ? "logo-text-mobile" : "logo-text"}
            href="/home"
          >
            Kurbs
          </a>
          {isMobile ? (
            <Menu right>
              <a href="/about" id="about" className="menu-item">
                About
              </a>
              <a
                id="contact"
                className="menu-item"
                href="mailto:youremail@domain.tld"
              >
                Contact
              </a>
            </Menu>
          ) : (
            <div className="menu-container">
              <a className="menu-item" href="/about">
                About
              </a>
              <a className="menu-item" href="mailto:youremail@domain.tld">
                Contact Us
              </a>
            </div>
          )}
        </div>
      </header>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/home" />;
            }}
          />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/film" component={Film} />
          <Route path="/request" component={Request} />
        </Switch>
      </Router>
    </div>
  );
}

function Home() {
  const isMobile = useMediaQuery({ maxWidth: 1224 });

  useEffect(() => {
    cacheImages(images);
    var text_one = $("#text_one");
    var text_two = $("#text_two");
    var text_three = $("#text_three");

    text_one_value = text_one.offset().top - 200;
    text_two_value = text_two.offset().top - 200;
    text_three_value = text_three.offset().top - 200;
  }, []);

  const [displayImage, setDisplayImage] = useState(search);

  $(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height < text_one_value) {
      setDisplayImage(search);
    } else if (height < text_two_value) {
      setDisplayImage(collection);
    } else if (height < text_three_value) {
      setDisplayImage(conversation);
    }
  });

  return (
    <div className="App">
      <div id={isMobile ? "headline-mobile" : "headline"}>
        <div id={isMobile ? "headline-container-mobile" : "headline-container"}>
          <div class="section-header">
            <h1 id={isMobile ? "headline-title-mobile" : "headline-title"}>
              Insights from <br />
              the world’s greatest <br></br>
            </h1>
            <div
              class={
                isMobile
                  ? "rw-words-mobile rw-words-1-mobile "
                  : "rw-words rw-words-1"
              }
            >
              <span>Thinkers</span>
              <span>Answers</span>
              <span>Scriptures</span>
              <span>Tweets</span>
              <span>Expertise</span>
            </div>
          </div>

          {/* Moving Graphics */}
          <div className="moving-graphics-container">
            {isMobile
              ? movingGraphicsMobile.map((graphic) => {
                  return (
                    <img
                      className={
                        isMobile
                          ? "moving-graphics-image-mobile"
                          : "moving-graphics-image"
                      }
                      style={{
                        left: graphic.left,
                        top: graphic.top,
                      }}
                      src={graphic.img}
                    />
                  );
                })
              : movingGraphics.map((graphic) => {
                  return (
                    <img
                      className="moving-graphics-image"
                      style={{
                        left: graphic.left,
                        top: graphic.top,
                      }}
                      src={graphic.img}
                    />
                  );
                })}
          </div>
        </div>
        <div
          className={
            isMobile
              ? "call-to-action-container-mobile"
              : "call-to-action-container"
          }
        >
          <div
            className={
              isMobile ? "call-to-action-left-mobile" : "call-to-action-left"
            }
          >
            <a onClick={() => alert("Film coming soon")} id="play-text">
              {/* href="/film" */}
              Watch the film
            </a>
            <a href="/film">
              <img id="play-button" src={play} alt="Watch the video" />
            </a>
          </div>
          <div
            className={
              isMobile ? "call-to-action-right-mobile" : "call-to-action-right"
            }
          >
            <button
              className="request-button"
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "https://s4lnqpx6qg2.typeform.com/to/tPRmF6u3";

                //"/request";
              }}
            >
              <a
                id={
                  isMobile
                    ? "call-to-action-right_text-mobile"
                    : "call-to-action-right_text"
                }
              >
                Request Access
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* DETAILS */}
      <div
        style={{ paddingTop: isMobile ? 20 : 80, backgroundColor: "#f5f5f7" }}
      >
        <div
          style={{
            zIndex: 1,
            height: isMobile ? "100%" : "auto",
            maxWidth: isMobile ? "100%" : "40%",
            float: isMobile ? null : "left",
          }}
        >
          <img
            className={isMobile ? "display-phone-mobile" : "display-phone"}
            src={displayImage}
          />
          <img
            style={{ visibility: "hidden" }}
            id="sticky-phantom"
            className="display-phone-mobile"
            src={displayImage}
          />
        </div>

        {/* HOW IT WORKS */}
        <div
          className={
            isMobile
              ? "display-description-container-mobile"
              : "display-description-container"
          }
        >
          <h1 id={isMobile ? "headline-title-mobile" : "headline-title"}>
            How it works
          </h1>
          {howDescriptions.map((how) => {
            return (
              <div
                className={
                  isMobile
                    ? "description-container-mobile"
                    : "description-container"
                }
              >
                <img
                  className={
                    isMobile
                      ? "description-container-image-mobile "
                      : "description-container-image "
                  }
                  src={checkmark}
                />
                <p
                  id={how.id}
                  className={
                    isMobile
                      ? "display-description-mobile"
                      : "display-description"
                  }
                >
                  {how.description}
                </p>
              </div>
            );
          })}

          {/* USE IT TO */}
          <div style={{ paddingLeft: isMobile ? "auto" : 50 }}>
            <h1 id={isMobile ? "headline-title-mobile" : "headline-title"}>
              Use it to
            </h1>

            <div
              className={"use-container"}
              style={{
                flexDirection: isMobile ? "column" : "row",
                gap: 20,
              }}
            >
              {useDescriptions.map((use) => {
                return (
                  <div
                    style={{
                      backgroundColor: "white",
                      padding: 16,
                      borderRadius: 8,
                      marginBottom: 16,
                      width: isMobile ? "auto" : "45%",
                    }}
                  >
                    <h3 style={{ color: "#6e6e73" }}>{use.title}</h3>
                    <ul
                      style={{
                        listStyle: "none",
                        paddingLeft: 0,
                        color: "#6e6e73",
                      }}
                    >
                      {use.descriptions.map((description) => {
                        return (
                          <li style={{ marginBottom: 16 }}>- {description}</li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* TESTIMONIAL */}
            <div
              className="testimonial-container"
              style={{
                padding: isMobile ? 16 : 24,
              }}
            >
              {" "}
              <h4 style={{ fontSize: isMobile ? "auto" : 25 }}>
                "{testimonial.description}"
              </h4>
              <div id="testimonial-identity-container">
                <img
                  style={{
                    marginRight: 8,
                    borderRadius: isMobile ? 20 : 40,
                    width: isMobile ? 40 : 80,
                    height: isMobile ? 40 : 80,
                  }}
                  src={testimonialImage}
                />
                <div id="testimonial-identity-details-container">
                  <a
                    style={{
                      fontWeight: "bold",
                      fontSize: isMobile ? "auto" : 20,
                    }}
                  >
                    {testimonial.name}
                  </a>
                  <a
                    style={{
                      fontSize: isMobile ? "auto" : 20,
                    }}
                  >
                    {testimonial.occupation}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FOUNDER */}
      <div className={isMobile ? "founder-mobile" : "founder"}>
        <h2 id="founder-title">
          The world’s most important <br /> knowledge, organized.
        </h2>
        <a id={isMobile ? "founder-message-mobile" : "founder-message"}>
          "Kurbs mission is to help bring relevant knowledge to the forefront.{" "}
          <br />
          Helping you find knowledge faster <br />
          so that you can continue doing what you love."
        </a>
        <br />
        <div style={{ marginTop: 20 }}>
          <small style={{ marginTop: 16 }}>
            <b style={{ fontSize: isMobile ? "auto" : 20 }}>Kerby Jean</b>
            <br /> Founder
          </small>
        </div>
        <div id="founder-button">
          <button
            className="request-button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://s4lnqpx6qg2.typeform.com/to/tPRmF6u3";
            }}
          >
            <a
              id={
                isMobile
                  ? "call-to-action-right_text-mobile"
                  : "call-to-action-right_text"
              }
            >
              Request Access
            </a>
          </button>
        </div>
        <div id={isMobile ? "world-mobile" : "world"}>
          <World />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default App;
