import React from "react";
import styled from "styled-components";

const ColorContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: center;
  justify-content: center; */
`;

const ColorBox = styled.div`
  width: 30px;
  height: 30px;
  margin: 5px;
  border-radius: 50%;
`;

export default function ColorPalette({ colors, artPieces }) {
  const colours = artPieces?.colors || [];
  console.log("colors", colors);

  return (
    <div>
      <ColorContainer>
        {colours.map((color, index) => (
          <ColorBox key={index} style={{ backgroundColor: color }} />
        ))}
      </ColorContainer>
    </div>
  );
}
