// import styled from "styled-components";
import About from "./component/home/about";
import Home from "./component/screen/home";
import { ThemeProvider } from "styled-components";
function App() {
  const theme = {
    large: "1200px",
    desktop: "992px",
    tablet: "768px",
    phone: "576px",
  };

  return (
    <ThemeProvider theme={theme}>
      <Home />
      <About />
    </ThemeProvider>
  );
}

export default App;
