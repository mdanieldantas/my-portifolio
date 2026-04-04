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
              I am a Systems Analysis and Development student (UNIFOR) and a
              technology professional focused on research and practice in
              Digital Health. My background combines a solid Full Stack
              technical foundation with 7 years of experience in Clinical
              Psychology, enabling me to create solutions that connect technical
              efficiency with human impact. Currently, I am part of the
              PET-Saúde Digital team (Federal Government/UNIFOR), working in the
              Technology Solutions area, where I design systems and modernize
              workflows for the Brazilian public health system (SUS), applying
              requirements engineering for the migration of legacy records to
              digital platforms.
              <br />
              <br />
              Key skills:
              <br />
              • Full Stack Development: JavaScript, Node.js, and React for
              scalable applications.
              <br />
              • Data Modeling and Persistence: SQL and Prisma ORM.
              <br />
              • Engenharia de Software: Aplicação de metodologias ágeis
              (Scrum/Kanban) e versionamento via Git/GitHub.
              <br />
              
              • Software Engineering: Agile methodologies (Scrum/Kanban) and
              version control with Git/GitHub.
              <br />
              <br />
            My clinical background brings a human-centered perspective to software development, ensuring that solutions are both technically robust and truly useful for caregivers.
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
