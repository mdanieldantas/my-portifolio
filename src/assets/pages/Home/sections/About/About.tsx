import { Container, Grid, styled, Typography, Box } from "@mui/material";

const About = () => {
  const StyledAbout = styled("div")(({ theme }) => ({
    background: "#ffffff",
    height: "100%",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      paddingTop: "100px",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "0",
    },
  }));

  const StyledText = styled(Typography)(({}) => ({
    color: "#000000",
  }));

  return (
    <StyledAbout>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <StyledText variant="h2" textAlign="center" mt={10} pb={2}>
              About Me
            </StyledText>
            <StyledText variant="body1" textAlign="center" pb={2}>
              Systems Analysis and Development student at the Universidade de
              Fortaleza (Unifor), with a certification in Full Stack Web Development from
              Digital College and a degree in Psychology. I have a solid
              foundation in web development and a versatile profile, able to
              adapt to different challenges. My skills include programming
              (JavaScript, React, Node.JS), code versioning (GitHub) and
              database management. My experience in Psychology has given me a
              humanized view of technology, allowing me to develop solutions
              that meet users' needs.
            </StyledText>
            <Box
              sx={{
                width: "100%",
                height: "2px",
                backgroundColor: "#000000",
                marginTop: "40px",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </StyledAbout>
  );
};

export default About;
