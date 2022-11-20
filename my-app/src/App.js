import React from "react";
import { Container, Grid, Box, Typography, Button, } from "@mui/material";
import "./App.css";

// import { color } from "@mui/system";


export default function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12}>
            <Box mt="200px" color="white" width="700px">
              <Typography
                fontFamily="'Sono', sans-serif"
                fontWeight="light"
                fontSize="20px"
              >
                Hi, my name is
              </Typography>
              <Typography
                fontFamily="'Manrope', sans-serif"
                fontWeight="Bold"
                fontSize="80px"
                color="#17252A"
                letterSpacing={4}
              >
                Tania.
              </Typography>
              <Typography
                fontFamily="'Manrope', sans-serif"
                fontWeight="Bold"
                fontSize="40px"
              >
                I build your imagination.
              </Typography>
              <br />
              <Typography
                fontFamily="'Sono', sans-serif"
                fontWeight="light"
                fontSize="20px"
              >
                Product Manager specializing in&nbsp;
                <span
                  style={{
                    color: "#17252A",
                    fontWeight: "light",
                    fontSize: "20px",
                  }}
                >
                  user experience,
                </span>
              </Typography>
              <br />
              <Button
                variant="outlined" color= "info"
                onClick={() => {
                  window.location.href='mailto:taniaa2707@gmail.com'
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
