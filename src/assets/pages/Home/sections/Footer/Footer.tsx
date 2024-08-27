import {
  Container,
  Grid,
  styled,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  const StyledFooter = styled("div")(({ theme }) => ({
    background: "#ffffff",
    height: "150px", // Aumenta a altura para acomodar o texto adicional
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "20px",
    paddingBottom: "20px",
  }));

  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <IconButton
              component="a"
              href="https://github.com/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/mdanieldantas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              component="a"
              href="mailto:seu-email@example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EmailIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
        <Box mt={2}>
          <Typography variant="body2" color="textSecondary" align="center">
            © 2024 Daniel Dantas - All rights reserved
          </Typography>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
