// src/App.tsx
import React from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#00796b",
    },
    secondary: {
      main: "#c51162",
    },
  },

  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Landing />
      <Projects />
      <Contact />
    </ThemeProvider>
  );
};

export default App;
