import styled from "styled-components";

import React from "react";
import { setFont } from "../styles";

function Title({ className, title, center }) {
  return <h3 className={className}>{title}</h3>;
}

export default styled(Title)`
  font-size: 36px;
  text-transform: capitalize;
  letter-spacing: 5px;
  ${setFont.slanted};
  text-align: ${(props) => (props.center ? "center" : "left")};
`;
