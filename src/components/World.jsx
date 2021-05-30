import React, { useEffect, useRef } from "react";
import Texture from "../assets/texture2.jpeg";
import Globe from "react-globe.gl";
import { useMediaQuery } from "react-responsive";

const arcsData = [1, 2, 3, 4, 5, 6].map(() => ({
  startLat: (Math.random() - 0.5) * 180,
  startLng: (Math.random() - 0.5) * 360,
  endLat: (Math.random() - 0.5) * 180,
  endLng: (Math.random() - 0.5) * 360,
  color: [["#000000"][0], ["#000000"][0]],
}));

export const World = () => {
  const globeEl = useRef();
  const isMobile = useMediaQuery({ maxWidth: 1224 });

  useEffect(() => {
    // aim at continental US centroid
    globeEl.current.pointOfView({
      lat: 39.6,
      lng: -98.5,
      altitude: isMobile ? 4 : 2.5,
    });
    globeEl.current.controls().enableZoom = false;
    globeEl.current.controls().autoRotate = true;
  }, []);

  return (
    <Globe
      ref={globeEl}
      width={isMobile ? 300 : 700}
      height={isMobile ? 300 : 700}
      backgroundColor={"rgba(0,0,0,0)"}
      globeImageUrl={Texture}
      arcColor={[
        "#d16ba5",
        "#c777b9",
        "#ba83ca",
        "#aa8fd8",
        "#9a9ae1",
        "#8aa7ec",
        "#79b3f4",
        "#69bff8",
        "#52cffe",
        "#41dfff",
        "#46eefa",
        "#5ffbf1",
      ]}
      arcsData={arcsData}
      arcDashGap={0.6}
      arcDashLength={0.3}
      arcStroke={0.5}
      arcDashAnimateTime={4000 + 500}
      rendererConfig={{ preserveDrawingBuffer: true }}
    />
  );
};
