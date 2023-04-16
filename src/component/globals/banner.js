import React from "react";
import styled, { Keyframes, css } from "styled-components";
import { setColor } from "../styles";

export default function Banner({ className, title, greeting, text, children }) {
  return (
    <div className={className}>
      <h1>
        {greeting} <span>{title}</span>
      </h1>
      <div className="info">
        <p>{text}</p>
        {children}
      </div>
    </div>
  );
}

export const BannerWrapper = styled(Banner)`
  background: rgba(0, 0, 0, 0.3);
  color: ${setColor.mainWhite};
  text-align: center;
  padding: 60px 32px;
  letter-spacing: 3px;

  h1 {
    text-transform: capitalize;
    color: ${setColor.primaryColor};
    span {
      color: ${setColor.mainWhite};
    }
    p {
      width: 85%;
      margin: 0 auto;
    }
  }

  @media (min-width: 768px) {
  }
`;
