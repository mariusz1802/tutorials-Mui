import { useState } from "react";
import "../App.css";
import Button from "@mui/material/Button";
import styled, { ThemeProvider } from "styled-components";
import TourCard from "../components/TourCard";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Paper from "@mui/material/Paper";
import cities from "../data.json";

const Home = () => (
  <>
    <Container sx={{ marginY: 5 }}>
      {cities.map((city) => (
        <>
          <Typography
            variant="h4"
            component="h2"
            marginTop={5}
            marginBottom={3}
          >
            Top {city.name} tours
          </Typography>
          <Grid container spacing={2}>
            {city.tours.map((tour, index) => (
              <TourCard tour={tour} key={index} />
            ))}
          </Grid>
        </>
      ))}
    </Container>
  </>
);

export default Home;
