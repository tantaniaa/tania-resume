import React from "react";
import { Container, Grid, Box, Typography, Button } from "@mui/material";
import "./App.css";
import Typewriter from "typewriter-effect";
import { borderColor } from "@mui/material/node_modules/@mui/system";

// import { color } from "@mui/system";

export default function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "70px",
          color: "white",
          letterSpacing: "5",
          justifyContent: "flex-end",
        }}
      >
        <div style={{ margin: "20px 50px 0 20px" }}>
          <a style={{ textDecoration: 'none', color: 'white' }} href="https://www.linkedin.com/" target="_blank">LinkedIn</a>
        </div>
        <div style={{ marginRight: "50px", marginTop: "20px" }}>Github</div>
        <div style={{ marginRight: "50px", marginTop: "15px" }}>
          <Button
            variant="outlined"
            color="inherit"
            onClick={() => {
              window.location.href = "mailto:taniaa2707@gmail.com";
            }}
          >
            Resume
          </Button>
        </div>
      </div>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12}>
            <Box mt="200px" color="white" width="900px">
              <Typography
                fontFamily="'Sono', sans-serif"
                fontWeight="light"
                fontSize="30px"
              >
                Hi, my name is
              </Typography>
              <Typography
                fontFamily="'Manrope', sans-serif"
                fontWeight="Bolder"
                fontSize="100px"
                color="#17252A"
                letterSpacing={4}
              >
                Tania.
              </Typography>
              <Typography
                fontFamily="'Manrope', sans-serif"
                fontWeight="Bolder"
                fontSize="90px"
                color="white"
              >
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Software Engineer")
                      .pauseFor(100)
                      .deleteAll()
                      .typeString("Product Manager")
                      .start();
                  }}
                />
              </Typography>
              <br />
              <Typography
                fontFamily="'Sono', sans-serif"
                fontWeight="light"
                fontSize="25px"
              >
                I'm a product manager worked in Fintech industry specialised
                in&nbsp;
                <span
                  style={{
                    color: "#17252A",
                    fontWeight: "light",
                    fontSize: "25px",
                  }}
                >
                  onboarding and user experience.
                </span>
              </Typography>
              <br />
              <Button
                variant="outlined"
                color="inherit"
                onClick={() => {
                  window.location.href = "mailto:taniaa2707@gmail.com";
                }}
              >
                Contact Me
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
