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
            "Full-stack Developer",
            "Avid Reader",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </>
  );
};
