import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter
        sx={{ colour: "#80CBC4 !important" }}
        options={{
          strings: [
            "Front-end Developer",
            "Web Developer",
            "Travel Enthusiast",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </>
  );
};
