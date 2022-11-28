import React from "react";
import { Container, Grid, Box, Typography, Button } from "@mui/material";
import "./App.css";
import Typewriter from "typewriter-effect";
import { isMobile } from "react-device-detect";

// import { color } from "@mui/system";

export default function App() {
  return (
    <div className="App">
      <div>
        {isMobile ? (
          <Grid
            container
            xs={12}
            style={{
              display: "flex",
              width: "100%",
              height: "70px",
              color: "#F2E5E5",
              letterSpacing: "5",
              justifyContent: "flex-end",
            }}
          >
            <div style={{ fontSize: "15px", margin: "20px 10px 0 10px" }}>
              {" "}
              <a className="navbar-about" href="#AboutMe">
                <img
                  src={"abouticon.jpg"}
                  alt="About"
                  style={{
                    height: "20px",
                    width: "20px",
                    objectFit: "cover",
                  }}
                />
              </a>
            </div>
            <div style={{ fontSize: "15px", margin: "20px 10px 0 10px" }}>
              <a
                className="navbar-medium"
                href="https://medium.com/@taniaa2707"
                target="_blank"
              >
                <img
                  src={"mediumicon.png"}
                  alt="Medium"
                  style={{
                    height: "20px",
                    width: "20px",
                    objectFit: "cover",
                  }}
                />
              </a>
            </div>
            <div style={{ fontSize: "15px", margin: "20px 10px 0 10px" }}>
              <a
                className="navbar-linkedin"
                href="https://www.linkedin.com/in/tania-tania/"
                target="_blank"
              >
                <img
                  src={"linkedinicon.png"}
                  alt="Linkedin"
                  style={{
                    height: "20px",
                    width: "20px",
                    objectFit: "cover",
                  }}
                />
              </a>
            </div>
            <div style={{ fontSize: "15px", margin: "20px 10px 0 10px" }}>
              <a
                className="navbar-github"
                href="https://github.com/tantaniaa/"
                target="_blank"
              >
                <img
                  src={"githubicon.png"}
                  alt="Github"
                  style={{
                    height: "20px",
                    width: "20px",
                    objectFit: "cover",
                  }}
                />
              </a>
            </div>
            <div style={{ fontSize: "15px", margin: "20px 10px 0 10px" }}>
              <a
                className="navbar-github"
                href="https://drive.google.com/file/d/1DgqLFuZ9fhi3dg5dj5x2IVWtHSoVTY3P/view?usp=sharing"
                target="_blank"
              >
                <img
                  src={"resumeicon.png"}
                  alt="Linkedin"
                  style={{
                    height: "20px",
                    width: "20px",
                    objectFit: "cover",
                  }}
                />
              </a>
            </div>
          </Grid>
        ) : (
          <Grid
            container
            xs={12}
            style={{
              display: "flex",
              width: "100%",
              height: "70px",
              color: "#F2E5E5",
              letterSpacing: "5",
              justifyContent: "flex-end",
            }}
          >
            <div style={{ margin: "20px 50px 0 20px" }}>
              {" "}
              <a className="navbar-about" href="#AboutMe">
                About
              </a>
            </div>
            <div style={{ margin: "20px 50px 0 20px" }}>
              <a
                className="navbar-medium"
                href="https://medium.com/@taniaa2707"
                target="_blank"
              >
                Medium
              </a>
            </div>
            <div style={{ margin: "20px 50px 0 20px" }}>
              <a
                className="navbar-linkedin"
                href="https://www.linkedin.com/in/tania-tania/"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
            <div style={{ marginRight: "50px", marginTop: "20px" }}>
              <a
                className="navbar-github"
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
                href="https://drive.google.com/file/d/1DgqLFuZ9fhi3dg5dj5x2IVWtHSoVTY3P/view?usp=sharing"
                target="_blank"
              >
                Resume
              </Button>
            </div>
          </Grid>
        )}
      </div>

      <Container>
        <Grid container>
          <Grid item xs={12}>
            {isMobile ? (
              <Box mt="80px" color="#F2E5E5">
                <Typography
                  fontFamily="'Sono', sans-serif"
                  fontWeight="light"
                  fontSize="20px"
                >
                  Hi, my name is
                </Typography>
                <Typography
                  fontFamily="'Manrope', sans-serif"
                  fontWeight="Bolder"
                  fontSize="80px"
                  color="#E8C4C4"
                  letterSpacing={4}
                >
                  Tania.
                </Typography>
                <Typography
                  fontFamily="'Manrope', sans-serif"
                  fontWeight="Bolder"
                  fontSize="40px"
                  color="#CE7777"
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
                  fontSize="15px"
                >
                  working in Fintech industry specialised in&nbsp;
                  <span
                    style={{
                      color: "#F2E5E5",
                      fontWeight: "light",
                      fontSize: "15px",
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
            ) : (
              <Box mt="200px" color="#F2E5E5">
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
                  color="#E8C4C4"
                  letterSpacing={4}
                >
                  Tania.
                </Typography>
                <Typography
                  fontFamily="'Manrope', sans-serif"
                  fontWeight="Bolder"
                  fontSize="70px"
                  color="#CE7777"
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
                      color: "#F2E5E5",
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
            )}
          </Grid>
        </Grid>

        <div>
          {isMobile ? (
            <Grid id="AboutMe" container maxWidth="lg" mt="250px">
              <Grid item xs={12} md={6} lg={6}>
                <Box mt="0px" color="#F2E5E5">
                  <Typography
                    className="About Me"
                    fontFamily="'Manrope', sans-serif"
                    fontWeight="Bolder"
                    fontSize="40px"
                    color="#CE7777"
                  >
                    About Me
                  </Typography>

                  <Typography
                    fontFamily="'Sono', sans-serif"
                    fontWeight="light"
                    fontSize="15px"
                  >
                    Hello there! My name is Tania and I have passion in building
                    a product. I’ve had the privilege of working in&nbsp;
                    <span>
                      <a
                        style={{ textDecoration: "none", color: "#E2C2B3 " }}
                        href="https://www.spenmo.com"
                        target="_blank"
                      >
                        Spenmo&nbsp;
                      </a>
                    </span>
                    and{" "}
                    <span>
                      <a
                        style={{ textDecoration: "none", color: "#E2C2B3 " }}
                        href="https://www.ibm.com/my-en"
                        target="_blank"
                      >
                        IBM.&nbsp;
                      </a>
                    </span>
                    Recently I found a new interest in coding, which is reason
                    why I built this website.
                    <br />
                    <br />
                    Work aside, if you are into games, music, manga and anime,
                    hit me up. We'll be best buddies!
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <img
                  src={"profilepicture.png"}
                  alt="Profile Picture"
                  style={{
                    marginTop: "50px",
                    height: "70%",
                    width: "60%",
                    objectFit: "cover",
                  }}
                />
              </Grid>
            </Grid>
          ) : (
            <Grid id="AboutMe" container maxWidth="lg" mt="300px">
              <Grid item xs={12} md={6} lg={6}>
                <Box mt="0px" color="#F2E5E5">
                  <Typography
                    className="About Me"
                    fontFamily="'Manrope', sans-serif"
                    fontWeight="Bolder"
                    fontSize="60px"
                    color="#CE7777"
                  >
                    About Me
                  </Typography>

                  <Typography
                    fontFamily="'Sono', sans-serif"
                    fontWeight="light"
                    fontSize="20px"
                  >
                    Hello there! My name is Tania and I have passion in building
                    a product. I’ve had the privilege of working in&nbsp;
                    <span>
                      <a
                        style={{ textDecoration: "none", color: "#E2C2B3 " }}
                        href="https://www.spenmo.com"
                        target="_blank"
                      >
                        Spenmo&nbsp;
                      </a>
                    </span>
                    and{" "}
                    <span>
                      <a
                        style={{ textDecoration: "none", color: "#E2C2B3 " }}
                        href="https://www.ibm.com/my-en"
                        target="_blank"
                      >
                        IBM.&nbsp;
                      </a>
                    </span>
                    Recently I found a new interest in coding, reason why I
                    built this website.
                    <br />
                    <br />
                    Work aside, if you are into games, music, manga and anime,
                    hit me up. We'll be best buddies!
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
          )}
        </div>
        <Box height="300px"></Box>
      </Container>
    </div>
  );
}
