import elon2x from "./assets/elon2x.png";
import chamath2x from "./assets/chamath2x.png";
import steve2x from "./assets/steve2x.png";

import elon3x from "./assets/elon3x.png";
import chamath3x from "./assets/chamath3x.png";
import steve3x from "./assets/steve3x.png";

export const arcsData = [1, 2, 3, 4, 5, 6].map(() => ({
  startLat: (Math.random() - 0.5) * 180,
  startLng: (Math.random() - 0.5) * 360,
  endLat: (Math.random() - 0.5) * 180,
  endLng: (Math.random() - 0.5) * 360,
  color: [["#000000"][0], ["#000000"][0]],
}));

export const images = [elon2x, chamath2x, steve2x, elon3x, chamath3x, steve3x];

export const movingGraphicsMobile = [
  {
    left: "60%",
    top: "30%",
    img: chamath2x,
  },
  {
    left: "70%",
    top: "0%",
    img: elon2x,
  },
  {
    left: "80%",
    top: "17%",
    img: steve2x,
  },
];

export const movingGraphics = [
  {
    left: "50%",
    top: "50%",
    img: chamath3x,
  },
  {
    left: "60%",
    top: "35%",
    img: elon3x,
  },
  {
    left: "50%",
    top: "17%",
    img: steve3x,
  },
];
