import React from "react";
import styled, { css, keyframes } from "styled-components";
import { setBorder, setColor } from "../styles";

const fadeIn = (start, point, end) => {
  const animation = keyframes`
    0%{
        opacity: 0%;
        transform: translateY(${start});
    }
    50%{
        opacity: 0.5;
        transform: translateY(${point});
    }
    100%{
        opacity: 1;
        transform: translateY(${end})
    }
    `;
  return css`
    animation: ${animation} 3s ease-in-out;
  `;
};

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
  }

  p {
    width: 85%;
    margin: 0 auto;
  }

  @media (min-width: ${(props) => props.theme.tablet}) {
    width: 70vw;
    ${setBorder({ width: "6px", style: "solid", color: setColor.primaryColor })}
    p {
      width: 75%;
    }
  }

  h1 {
    ${fadeIn("100%", "-10%", "0")}
  }
  .info {
    ${fadeIn("-100%", "10%", "0")}
  }
`;
