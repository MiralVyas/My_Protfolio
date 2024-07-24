// src/components/Projects.tsx
import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
import ProjectBackground1 from "../assets/project-1.jpg";
import ProjectBackground2 from "../assets/project-2.avif";
import ProjectBackground3 from "../assets/project-3.png";
import ProjectBackground14 from "../assets/project-4.jpg";

const projects = [
  {
    title: "Sledge",
    description:
      "Developed frontend features for a social media platform using React, TypeScript, and Material-UI, focusing on responsive UI design and performance optimization.",
    image: ProjectBackground1,
    link: "#",
  },
  {
    title: "InterviewsByAI",
    description:
      "Implemented a full-stack web application using Next.js and Tailwind CSS, integrating ChatGPT for personalized interview feedback.",
    image: ProjectBackground2,
    link: "#",
  },
  {
    title: "BusRight",
    description:
      "Led the frontend development of a transportation management application, creating responsive and user-friendly UIs using React, HTML, CSS, JavaScript, and TypeScript, improving UI/UX and scalability.",
    image: ProjectBackground3,
    link: "#",
  },
  {
    title: "Currency Converter",
    description:
      "Developed application using AngularJS for the frontend and Node.js/MongoDB for the backend.",
    image: ProjectBackground14,
    link: "#",
  },
  // Add more projects here
];

const Projects: React.FC = () => {
  return (
    <Container id="projects" sx={{ padding: 4 }}>
      <Typography
        variant="h4"
        component="div"
        sx={{ textAlign: "center", marginBottom: 4 }}
      >
        Featured Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
