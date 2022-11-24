import React from "react";
import { Container, Grid, Box, Typography, Button } from "@mui/material";
import "./App.css";
import Typewriter from "typewriter-effect";

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
          <div style={{ margin: "20px 50px 0 20px" }}>About</div>
          <div style={{ margin: "20px 50px 0 20px" }}>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://medium.com/@taniaa2707"
              target="_blank"
            >
              Medium
            </a>
          </div>
          <div style={{ margin: "20px 50px 0 20px" }}>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://www.linkedin.com/in/tania-tania/"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
          <div style={{ marginRight: "50px", marginTop: "20px" }}>
            <a hover={{ color: "#e66c2c" }}> </a>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://github.com/tantaniaa/"
              target="_blank"
            >
              Github
            </a>
          </div>
          <div style={{ marginRight: "50px", marginTop: "15px" }}>
            <Button
              variant="outlined"
              color="inherit"
              style={{ textDecoration: "none", color: "white" }}
              href="https://drive.google.com/file/d/1F9GTx_5ID-I-0KR9nUptg9I8XmfFwnr1/view?usp=sharing"
              target="_blank"
            >
              Resume
            </Button>
          </div>
        </div>
<Container>
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
                color="#9897A9"
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
                working in Fintech industry specialised in&nbsp;
                <span
                  style={{
                    color: "white",
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
                Email Me
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid container maxWidth="lg" mt="300px">
          <Grid item xs={12} md={6} lg={6}>
            <Box mt="0px" color="white" >
              <Typography
                className="About Me"
                fontFamily="'Manrope', sans-serif"
                fontWeight="Bolder"
                fontSize="60px"
                color="#9897A9"
              >
                About Me
              </Typography>

              <Typography
                fontFamily="'Sono', sans-serif"
                fontWeight="light"
                fontSize="20px"
              >
                Hello there! My name is Tania and I have passion in building a
                product. I’ve had the privilege of working in&nbsp;
                <span>
                  <a
                    style={{ textDecoration: "none", color: "#17252A " }}
                    href="https://www.spenmo.com"
                    target="_blank"
                  >
                    Spenmo&nbsp;
                  </a>
                </span>
                and{" "}
                <span>
                  <a
                    style={{ textDecoration: "none", color: "#17252A " }}
                    href="https://www.ibm.com/my-en"
                    target="_blank"
                  >
                    IBM.&nbsp;
                  </a>
                </span>
                Recently found a new interest in coding, reason why I built this
                website.
                <br />
                <br />
                Work aside, if you are into games, music, manga and anime, hit
                me up. We'll be best buddies!
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <img
              src={"profilepicture.png"}
              alt="Profile Picture"
              style={{
                marginTop: "90px",
                height: "70%",
                width: "60%",
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>
        <Box height="300px"></Box>
      </Container>
    </div>
  );
}
