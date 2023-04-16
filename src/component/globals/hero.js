import styled from "styled-components";
import { setBackground, setFlex } from "../styles";
// import heroImg from "../../assets/heroBg.jpg";
const Hero = styled.div`
  min-height: 100vh;
  ${(props) => setBackground({ img: props.img, color: "rgba(0,0,0,0.5)" })}
  ${setFlex({ x: "center", y: "center" })};
`;

export default Hero;
