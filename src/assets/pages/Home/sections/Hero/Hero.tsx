// Importa componentes e funções do Material-UI
import { Button, Container, Grid, styled, Typography } from "@mui/material";
// Importa um icone de download do Material-UI
import DownloadIcon from "@mui/icons-material/Download";
// Importa um icone de email do Material-UI
import EmailIcon from "@mui/icons-material/Email";
// Importa uma imagem de avatar
import Avatar from "../../../../images/avatarDanielSemtop.jpg";

// Define o componente Hero como uma função
const Hero = () => {
  // Cria um componente estilizado chamado StyledHero, que é uma div com fundo preto
  const StyledHero = styled("div")(() => ({
    background: "black",
    height: "100vh",
  }));

  // Cria um componente estilizado chamado StyledImg, que é uma imagem com largura de 30% e bordas arredondadas
  const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",
  }));

  // Retorna o JSX que será renderizado
  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <StyledImg src={Avatar} />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography color="primary" variant="h1" textAlign="center">
                M Daniel Dantas
              </Typography>
              <Typography color="primary" variant="h2" textAlign="center">
                Programador Web
              </Typography>

              <Grid container display={"flex"} justifyContent={"center"}>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <Button>
                    <DownloadIcon />
                    Download CV
                  </Button>
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <Button>
                    <EmailIcon />
                    Fale comigo
                  </Button>
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
