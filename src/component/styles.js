export const setColor = {
  primaryColor: "#af9a7d",
  mainWhite: "#fff",
  mainBlack: "#fff",
  mainGrey: "#ececec",
  lightGrey: "#f7f7f7",
};

export const setFont = {
  main: "font-family: 'Lato', sans-serif;",
  slanted: "font-family: 'Courgette', cursive;",
};

export const setFlex = ({ x = "center", y = "center" } = {}) => {
  return `display:flex;align-items:${y};justify-content:${x}`;
};

export const setBackground = ({
  img = "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  color = "rgba(0,0,0,0)",
} = {}) => {
  return `background: linear-gradient(${color}, ${color}), url(${img}) center/cover fixed no-repeat;`;
};

export const setShadow = {
  light: "box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75)",
  dark: "box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75)",
  darkest: "box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75)",
};

export const setBorder = ({
  width = "2px",
  style = "solid",
  color = "black",
} = {}) => {
  return `border:${width} ${style} ${color}`;
};

export const sizes = {
  large: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576,
};

export const setTransition = ({
  property = "all",
  time = "0.3s",
  timing = "ease-in-out",
} = {}) => {
  return `transition:${property} ${time} ${timing}`;
};
