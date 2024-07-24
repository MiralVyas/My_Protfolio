// src/components/Landing.tsx
import React from "react";
import { Typography, Avatar, Box } from "@mui/material";
import { motion } from "framer-motion";
import backgroundImage from "../assets/background.jpg";
import ProfilePic from "../assets/profile-pic.jpeg";

const Landing: React.FC = () => {
  return (
    <Box
      id="landing"
      sx={{
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: 4,
      }}
    >
      <Avatar
        alt="Miral Vyas"
        src={ProfilePic}
        sx={{ width: 120, height: 120, marginBottom: 2 }}
        component={motion.div}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <Typography variant="h3" component="div" sx={{ marginBottom: 2 }}>
        Miral Vyas
      </Typography>
      <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
        Experienced Frontend Developer
      </Typography>
      <Typography variant="body1" component="div" sx={{ maxWidth: "600px" }}>
        Over 3 years of experience in developing responsive and accessible web
        applications. Seeking opportunities in the UK to apply my skills in
        dynamic and innovative IT environments.
      </Typography>
    </Box>
  );
};

export default Landing;
