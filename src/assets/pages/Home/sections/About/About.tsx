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
              I build software that impacts real lives.
              <br />
              <br />
              I'm a Full Stack Developer and Clinical Psychologist with 9 years
              of practice, currently architecting the web digitalization system
              for the SVO-CE Epidemiology Center (UNIFOR/Federal Government) -
              centralizing mortality data flow across 179 municipalities in
              Ceará, Brazil.
              <br />
              <br />
              My edge is the intersection of technology and human behavior.
              Psychology shaped me into a developer who gathers requirements
              with real depth, translates clinical and business needs into
              software logic, and communicates clearly across technical and
              non-technical teams.
              <br />
              <br />
              What I deliver:
              <br />
              → Institutional website (Next.js 15 + TypeScript): score 98-100
              in Performance and 100 in SEO/Accessibility on PageSpeed Mobile |
              FCP 0.5s | LCP 0.8s | CLS 0
              <br />
              → REST API (Node.js + PostgreSQL + Docker): JWT authentication,
              CI/CD via GitHub Actions, E2E deploy with custom domain
              <br />
              → Cloud library management system in production (Node.js,
              PostgreSQL, Docker) - live at bibliotecauni.space
              <br />
              <br />
              Stack:
              <br />
              JavaScript · TypeScript · Node.js · React · Next.js · Express
              <br />
              PostgreSQL · Prisma ORM · Supabase · Docker · GitHub Actions ·
              CI/CD
              <br />
              Tailwind CSS · Vercel · Cloudflare · Technical SEO · Core Web
              Vitals
              <br />
              <br />
              Based in Fortaleza, Brazil — open to remote, hybrid and on-site
              opportunities.
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