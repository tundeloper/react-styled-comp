import styled from "styled-components";
import { setBorder, setColor, setFont, setTransition } from "../styles";

export const PrimaryBtn = styled.button`
  display: inline-block;
  background: ${setColor.primaryColor};
  color: ${setColor.mainWhite};
  text-transform: capitalize;
  font-size: 18px;
  ${setFont.main};
  ${setBorder({ color: setColor.primaryColor })}
  letter-spacing: 3;
  padding: 17px 36px;
  cursor: pointer;
  text-decoration: none;
  ${setTransition({ time: "1s", timing: "linear" })};
  ${(props) =>
    `margin: ${props.t || 0} ${props.r || 0} ${props.b || 0} ${props.l || 0}`};

  &:hover {
    background: transparent;
    color: ${setColor.primaryColor};
  }
`;

export const SmallBtn = styled(PrimaryBtn)`
  padding: 9px 12px;
`;
