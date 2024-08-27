import { Container, Grid, styled, Typography, Box } from "@mui/material";

const About = () => {
  const StyledAbout = styled("div")(({ theme }) => ({
    background: "#ffffff",
    height: "50%",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      paddingTop: "100px",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "0",
    },
  }));

  const StyledText = styled(Typography)(({ theme }) => ({
    color: "#000000",
  }));

  return (
    <StyledAbout>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <StyledText variant="h2" textAlign="center" pb={2}>
              Sobre Mim
            </StyledText>
            <StyledText variant="body1" textAlign="center" pb={2}>
              Estudante de Análise e Desenvolvimento de Sistemas, com formação
              complementar em Psicologia. Possuo uma base sólida em
              desenvolvimento web e um perfil versátil, capaz de se adaptar a
              diferentes desafios. Minhas habilidades incluem programação
              (JavaScript, React, Node.JS), versionamento de código (GitHub) e
              gestão de bancos de dados. A experiência em Psicologia me
              proporcionou um olhar humanizado para a tecnologia, permitindo
              desenvolver soluções que atendam às necessidades dos usuários.
              Busco um estágio para aplicar meus conhecimentos e desenvolver
              minhas habilidades em um ambiente dinâmico e desafiador.
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
