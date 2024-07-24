// src/components/Header.tsx
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { GitHub, LinkedIn } from "@mui/icons-material";

const Header: React.FC = () => {
  return (
    <AppBar
      sx={{ background: "#e3cfb5" }}
      position="static"
      component={motion.div}
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Miral Vyas
        </Typography>
        <Link href="#landing" color="inherit" sx={{ margin: 1 }}>
          Home
        </Link>
        <Link href="#projects" color="inherit" sx={{ margin: 1 }}>
          Projects
        </Link>
        <Link href="#contact" color="inherit" sx={{ margin: 1 }}>
          Contact
        </Link>
        <IconButton
          href="https://www.linkedin.com/in/miral-vyas/"
          color="inherit"
        >
          <LinkedIn />
        </IconButton>
        <IconButton href="https://github.com/MiralVyas" color="inherit">
          <GitHub />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
