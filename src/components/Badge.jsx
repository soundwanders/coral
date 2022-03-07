import React from "react";
import styled from "styled-components";
import { ThemeColor, DarkThemeColor } from "../utils";

function Badge({content, clean = false, glow = false, paid = false, late = false}) {
  return (
    <Div clean={clean} glow={glow} paid={paid} late={late}>
      {content}
    </Div>
  );
}

const Div = styled.span`
  padding: 0.3rem 1rem;
  margin: 0.2rem;
  border-radius: 1rem;
  font-weight: 600;
  color: #f9f9f9;
  background-color: #48bff6;
  cursor: pointer;

  ${({clean}) =>
    clean &&
    `background-color: transparent;
    border: 0.05rem solid ${ThemeColor};
    color:${ThemeColor};`}

  ${({glow}) =>
    glow &&
    `
        font-size: 0.8rem;
        padding: 0.25rem 0.5rem;
        font-weight: 500;
        background-color: #ffea94;
        color: ${DarkThemeColor};
    `}
    ${({paid}) =>
    paid &&
    `
        background-color: #70e00041;
        color: #4be000;
    `}

${({late}) =>
    late &&
    `
        background-color: #ff595e41;
        color: #ff595e;
    `}
`;

export default Badge;
