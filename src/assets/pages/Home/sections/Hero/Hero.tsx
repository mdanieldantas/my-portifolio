// Importa componentes e funções do Material-UI
import { Box, Container, Grid, styled, Typography } from "@mui/material";
// Importa um icone de download do Material-UI
import DownloadIcon from "@mui/icons-material/Download";
// Importa um icone de email do Material-UI
import EmailIcon from "@mui/icons-material/Email";
// Importa uma imagem de avatar
import Avatar from "../../../../images/avatarDanielSemtop.jpg";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

// Define o componente Hero como uma função
const Hero = () => {
  // Cria um componente estilizado chamado StyledHero, que é uma div com fundo preto
  const StyledHero = styled("div")(({ theme }) => ({
    background: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
  }));

  // Cria um componente estilizado chamado StyledImg, que é uma imagem com largura de 30% e bordas arredondadas
  const StyledImg = styled("img")(({ theme }) => ({
    width: "80%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
  }));

  // Retorna o JSX que será renderizado
  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box position="relative">
                <Box position="absolute" width={"150%"} top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box position="relative" textAlign={"center"}>
                  <StyledImg src={Avatar} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography
                color="primary.contrastText"
                variant="h1"
                textAlign="center"
              >
                M Daniel Dantas
              </Typography>
              <Typography
                color="primary.contrastText"
                variant="h2"
                textAlign="center"
                pb={2}
              >
                Programador Web
              </Typography>

              <Grid
                container
                display={"flex"}
                justifyContent={"center"}
                spacing={3}
                pt={3}
              >
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton>
                    <DownloadIcon />
                    <Typography>Download CV</Typography>
                  </StyledButton>
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton>
                    <EmailIcon />
                    <Typography>Fale comigo</Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
