// import React from "react";
// import { render, screen } from "@testing-library/react";
// import { Spotlight } from "./Spotlight"; // Adjust the import path as needed

// const spotLightData = {
//   image: "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
//   artist: "Steve Johnson",
// };

// test("displays correct spotlight information", () => {
//   render(
//     <Spotlight image={spotLightData.image} artist={spotLightData.artist} />
//   );

//   const artistElement = screen.getByText(`Artist: ${spotLightData.artist}`);
//   const imageElement = screen.getByRole("img");

//   expect(artistElement).toBeInTheDocument();
//   expect(imageElement).toBeInTheDocument();
//     expect.stringContaining(spotLightData.image)
//   );
// });

import React from "react";
import { render, screen } from "@testing-library/react";
import { Spotlight } from "./Spotlight"; // Adjust the import path as needed

const spotLightData = {
  image: "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  artist: "Steve Johnson",
};

test("displays correct spotlight information", () => {
  render(
    <Spotlight image={spotLightData.image} artist={spotLightData.artist} />
  );

  const artistElement = screen.getByText(`Artist: ${spotLightData.artist}`);
  const imageElement = screen.getByRole("img");

  expect(artistElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
});
