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
import avaliacaoFisicaBack from "../../../../images/avaliacao-fisica-backend2.png";
import bibliotecaDeJogos from "../../../../images/biblioteca-de-jogos.png";
import bibliotecaEmprestimosCloud from "../../../../images/ImgBibliotecaUniDesktop.png";
import imgSiteGeane1 from "../../../../images/imgSiteGeane1.jpg";
import imgSitePsiDan1 from "../../../../images/imgSitePsiDan1.jpg";

const Projects = () => {
  const StyledProjects = styled("div")(({ theme }) => ({
    background: theme.palette.primary.main,
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    paddingTop: "50px",
    paddingBottom: "50px",
  }));

  const StyledText = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
  }));

  const ProjectCard = styled(Box)(({ theme }) => ({
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "4px",
    padding: "16px",
    textAlign: "left",
    marginBottom: "32px",
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
          <Grid item xs={12}>
            <StyledText variant="h2" textAlign="center" pb={2}>
              Projects
            </StyledText>

            <Grid container spacing={6} justifyContent="">

              {/* Card 1 — Git Profile Search */}
              <Grid item xs={12} sm={6} md={4}>
                <ProjectCard>
                  <StyledText variant="h6" pt={2}>
                    Git Profile Search
                  </StyledText>
                  <StyledText variant="body2" pt={1}>
                    September 2024
                  </StyledText>
                  <img
                    src={imageGithubSearchMobile}
                    alt="Git Profile Search"
                    style={{
                      width: "100%",
                      borderRadius: "4px",
                      marginTop: "16px",
                    }}
                  />
                  <StyledText variant="body1" pt={2}>
                    Web app that fetches real-time GitHub data via API —
                    displaying profile details, follower counts and top
                    repositories for any username. Built to practice API
                    integration, TypeScript typing and client-side routing
                    with React Router DOM.
                  </StyledText>
                  <StyledText variant="subtitle1" pt={2}>
                    React Vite · TypeScript · React Router DOM · CSS Modules ·
                    GitHub API
                  </StyledText>
                  <StyledButton
                    onClick={() =>
                      window.open(
                        "https://gitprofilesearch.vercel.app",
                        "_blank"
                      )
                    }
                  >
                    View Project
                  </StyledButton>
                  <StyledButton
                    onClick={() =>
                      window.open(
                        "https://github.com/mdanieldantas/git_profile_search",
                        "_blank"
                      )
                    }
                  >
                    View Code
                  </StyledButton>
                </ProjectCard>
              </Grid>

              {/* Card 2 — My Portfolio */}
              <Grid item xs={12} sm={6} md={4}>
                <ProjectCard>
                  <StyledText variant="h6" pt={2}>
                    My Portfolio
                  </StyledText>
                  <StyledText variant="body2" pt={1}>
                    September 2024
                  </StyledText>
                  <img
                    src={imageMyportifolioProject}
                    alt="My Portfolio"
                    style={{
                      width: "100%",
                      borderRadius: "4px",
                      marginTop: "16px",
                    }}
                  />
                  <StyledText variant="body1" pt={2}>
                    This portfolio — live in production. Built with React,
                    TypeScript and Material UI, focusing on component
                    architecture, responsive layout and clean styled-components
                    patterns.
                  </StyledText>
                  <StyledText variant="subtitle1" pt={2}>
                    React · TypeScript · Material UI · Styled Components
                  </StyledText>
                  <StyledButton
                    onClick={() =>
                      window.open(
                        "https://danieldantasdev.vercel.app",
                        "_blank"
                      )
                    }
                  >
                    View Project
                  </StyledButton>
                  <StyledButton
                    onClick={() =>
                      window.open(
                        "https://github.com/mdanieldantas/my-portifolio",
                        "_blank"
                      )
                    }
                  >
                    View Code
                  </StyledButton>
                </ProjectCard>
              </Grid>

              {/* Card 3 — Backend Physical Assessment */}
              <Grid item xs={12} sm={6} md={4}>
                <ProjectCard>
                  <StyledText variant="h6" pt={2}>
                    Backend Physical Assessment
                  </StyledText>
                  <StyledText variant="body2" pt={1}>
                    November 2024
                  </StyledText>
                  <img
                    src={avaliacaoFisicaBack}
                    alt="Backend Physical Assessment"
                    style={{
                      width: "100%",
                      borderRadius: "4px",
                      marginTop: "16px",
                    }}
                  />
                  <StyledText variant="body1" pt={2}>
                    REST API for managing user physical assessments — handling
                    registration, evaluation records and full CRUD operations.
                    Built to practice backend architecture, database integration
                    and environment configuration with Node.js.
                  </StyledText>
                  <StyledText variant="subtitle1" pt={2}>
                    Node.js · Express · MySQL2 · MariaDB · Dotenv · Nodemon ·
                    ESLint
                  </StyledText>
                  <StyledButton
                    onClick={() =>
                      window.open(
                        "https://github.com/mdanieldantas/backend-avaliacao-fisica",
                        "_blank"
                      )
                    }
                  >
                    View Code
                  </StyledButton>
                </ProjectCard>
              </Grid>

              {/* Card 4 — Games Library */}
              <Grid item xs={12} sm={6} md={4}>
                <ProjectCard>
                  <StyledText variant="h6" pt={2}>
                    Games Library
                  </StyledText>
                  <StyledText variant="body2" pt={1}>
                    November 2024
                  </StyledText>
                  <img
                    src={bibliotecaDeJogos}
                    alt="Games Library"
                    style={{
                      width: "100%",
                      borderRadius: "4px",
                      marginTop: "16px",
                    }}
                  />
                  <StyledText variant="body1" pt={2}>
                    Frontend app for managing a personal game collection —
                    add, list and remove titles with data persisted in
                    localStorage. Built to practice React state management,
                    Vite setup and modular CSS architecture.
                  </StyledText>
                  <StyledText variant="subtitle1" pt={2}>
                    React · Vite · CSS Modules
                  </StyledText>
                  <StyledButton
                    onClick={() =>
                      window.open(
                        "https://github.com/mdanieldantas/biblioteca-de-jogos?tab=readme-ov-file",
                        "_blank"
                      )
                    }
                  >
                    View Code
                  </StyledButton>
                </ProjectCard>
              </Grid>

              {/* Card 5 — Biblioteca Empréstimos Cloud */}
              <Grid item xs={12} sm={6} md={4}>
                <ProjectCard>
                  <StyledText variant="h6" pt={2}>
                    Biblioteca Empréstimos Cloud
                  </StyledText>
                  <StyledText variant="body2" pt={1}>
                    March 2026
                  </StyledText>
                  <img
                    src={bibliotecaEmprestimosCloud}
                    alt="Biblioteca Empréstimos Cloud"
                    style={{
                      width: "100%",
                      borderRadius: "4px",
                      marginTop: "16px",
                    }}
                  />
                  <StyledText variant="body1" pt={2}>
                    Full stack cloud library system developed as an academic
                    project at UNIFOR — featuring user registration, book
                    search, loan reservations and status tracking. Deployed
                    end-to-end with CI/CD, JWT authentication, Swagger docs
                    and a custom domain.
                  </StyledText>
                  <StyledText variant="subtitle1" pt={2}>
                    React · Vite · Node.js · Express · PostgreSQL · Supabase ·
                    Prisma · Docker · CI/CD · JWT · Swagger
                  </StyledText>
                  <StyledButton
                    onClick={() =>
                      window.open(
                        "https://www.bibliotecauni.space",
                        "_blank"
                      )
                    }
                  >
                    Front-end
                  </StyledButton>
                  <StyledButton
                    onClick={() =>
                      window.open(
                        "https://github.com/app-biblioteca-ads-unifor-grupo-35-N697/biblioteca-emprestimos-cloud",
                        "_blank"
                      )
                    }
                  >
                    Code
                  </StyledButton>
                  <StyledButton
                    onClick={() =>
                      window.open(
                        "https://biblioteca-emprestimos-cloud.onrender.com/docs",
                        "_blank"
                      )
                    }
                  >
                    Swagger
                  </StyledButton>
                  <StyledButton
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/watch?v=g1CK-HNEQSo",
                        "_blank"
                      )
                    }
                  >
                    Video Presentation
                  </StyledButton>
                </ProjectCard>
              </Grid>

              {/* Card 6 — Instituto Geane Gondim */}
              <Grid item xs={12} sm={6} md={4}>
                <ProjectCard>
                  <StyledText variant="h6" pt={2}>
                    Instituto Geane Gondim — Landing Page
                  </StyledText>
                  <StyledText variant="body2" pt={1}>
                    2025
                  </StyledText>
                  <img
                    src={imgSiteGeane1}
                    alt="Instituto Geane Gondim Landing Page"
                    style={{
                      width: "100%",
                      borderRadius: "4px",
                      marginTop: "16px",
                    }}
                  />
                  <StyledText variant="body1" pt={2}>
                    Institutional landing page for a social impact NGO
                    operating since 2005 in Fortaleza — covering community
                    health, professional training, culture and sport. Built
                    with Next.js 15, TypeScript and advanced technical SEO,
                    achieving score 98–100 in Performance and 100 in
                    SEO/Accessibility on PageSpeed Mobile.
                  </StyledText>
                  <StyledText variant="subtitle1" pt={2}>
                    Next.js 15 · TypeScript · Tailwind CSS · Vercel ·
                    Technical SEO · Core Web Vitals
                  </StyledText>
                  <StyledButton
                    onClick={() =>
                      window.open(
                        "https://institutogeanegondim.com.br",
                        "_blank"
                      )
                    }
                  >
                    View Project
                  </StyledButton>
                  <StyledButton
                    onClick={() =>
                      window.open(
                        "https://github.com/mdanieldantas/instituto-geane-gondim-landing-page",
                        "_blank"
                      )
                    }
                  >
                    View Code
                  </StyledButton>
                </ProjectCard>
              </Grid>

              {/* Card 7 — Psicólogo Daniel Dantas */}
              <Grid item xs={12} sm={6} md={4}>
                <ProjectCard>
                  <StyledText variant="h6" pt={2}>
                    Psicólogo Daniel Dantas — Institutional Website
                  </StyledText>
                  <StyledText variant="body2" pt={1}>
                    2024 – Present
                  </StyledText>
                  <img
                    src={imgSitePsiDan1}
                    alt="Psicólogo Daniel Dantas Website"
                    style={{
                      width: "100%",
                      borderRadius: "4px",
                      marginTop: "16px",
                    }}
                  />
                  <StyledText variant="body1" pt={2}>
                    Own clinical psychology website — built, deployed and
                    maintained in production. Features online scheduling,
                    blog, services and SEO-optimized content. Achieved score
                    98–100 in Performance and 100 in SEO/Accessibility on
                    PageSpeed Mobile | FCP 0.5s | LCP 0.8s | CLS 0.
                  </StyledText>
                  <StyledText variant="subtitle1" pt={2}>
                    Next.js 15 · TypeScript · Tailwind CSS · Supabase ·
                    Vercel · GA4 · Google Search Console · Cloudflare
                  </StyledText>
                  <StyledButton
                    onClick={() =>
                      window.open(
                        "https://psicologodanieldantas.com.br",
                        "_blank"
                      )
                    }
                  >
                    View Project
                  </StyledButton>
                </ProjectCard>
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledProjects>
  );
};

export default Projects;