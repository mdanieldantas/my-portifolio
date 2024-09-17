import {
  Container,
  Grid,
  styled,
  Typography,
  Box,
  Button,
} from "@mui/material";
import imageMyportifolioProject from "../../../../images/imgMyPortifolioMobile.png";
import imageGithubSearchMobile from "../../../../images/ImgGitSearchMobile1.jpg";

const Projects = () => {
  const StyledProjects = styled("div")(({ theme }) => ({
    background: theme.palette.primary.main,
    minHeight: "100vh", // Ajuste para garantir que a seção ocupe pelo menos a altura da tela
    display: "flex",
    alignItems: "center",
    paddingTop: "50px",
    paddingBottom: "50px", // Adiciona espaço na parte inferior
  }));

  const StyledText = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
  }));

  const ProjectCard = styled(Box)(({ theme }) => ({
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "4px",
    padding: "16px",
    textAlign: "left", // Alinhamento dos textos para a esquerda
    marginBottom: "32px", // Aumenta o espaço entre os cards
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  }));

  const StyledButton = styled(Button)(({ theme }) => ({
    border: `1px solid ${theme.palette.primary.contrastText}`,
    color: theme.palette.primary.contrastText,
    margin: "8px",
  }));

  return (
    <StyledProjects>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {" "}
          {/* Aumenta o espaço horizontal entre os cards */}
          <Grid item xs={12}>
            <StyledText variant="h2" textAlign="center" pb={2}>
              Projetos
            </StyledText>
            <Grid container spacing={6} justifyContent="center">
              {" "}
              {/* Aumenta o espaço horizontal entre os cards */}
              <Grid item xs={12} sm={6} md={4}>
                <ProjectCard>
                  <StyledText variant="h6" pt={2}>
                  Git Profile Search
                  </StyledText>
                  <StyledText variant="body2" pt={1}>
                    Setembro 2024
                  </StyledText>
                  <img
                    src={imageGithubSearchMobile}
                    alt="Projeto 1"
                    style={{
                      width: "100%",
                      borderRadius: "4px",
                      marginTop: "16px",
                    }}
                  />
                  <StyledText variant="body1" pt={2} >
                    Git Profile Search é uma aplicação web que permite aos usuários
                    buscar perfis do GitHub e visualizar informações detalhadas
                    sobre os usuários e seus repositórios.
                  </StyledText>
                  <StyledText variant="subtitle1" pt={2}>
                  React
Vite - TypeScript - React Router DOM - CSS Modules - GitHub API
                  </StyledText>
                  <StyledButton 
  onClick={() => window.open("https://gitprofilesearch.vercel.app", "_blank")}
>
  View Project
</StyledButton>

<StyledButton
  onClick={() => window.open("https://github.com/mdanieldantas/git_profile_search", "_blank")}
>
  View Code
</StyledButton>
                </ProjectCard>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <ProjectCard>
                  <StyledText variant="h6" pt={2}>
                    My Portifolio
                  </StyledText>
                  <StyledText variant="body2" pt={1}>
                    Setembro 2024
                  </StyledText>
                  <img
                    src={imageMyportifolioProject}
                    alt="Projeto 2"
                    style={{
                      width: "100%",
                      borderRadius: "4px",
                      marginTop: "16px",
                    }}
                  />
                  <StyledText variant="body1" pt={2}>
                  My Portfolio é uma aplicação web que exibe informações profissionais, habilidades e projetos do desenvolvedor..
                  </StyledText>
                  <StyledText variant="subtitle1" pt={2}>
                  React - TypeScript - MaterialUI - Styled Components
                  </StyledText>
                  <StyledButton 
  onClick={() => window.open("https://danieldantasdev.vercel.app", "_blank")}
>
  View Project
</StyledButton>

<StyledButton
  onClick={() => window.open("https://github.com/mdanieldantas/my-portifolio", "_blank")}
>
  View Code
</StyledButton>
                </ProjectCard>
              </Grid>
              {/* Adicione mais cards de projetos conforme necessário */}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledProjects>

  );
};

export default Projects;
