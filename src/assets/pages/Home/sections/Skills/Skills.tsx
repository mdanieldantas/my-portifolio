import { Container, Grid, styled, Typography, Box } from "@mui/material";

const Skills = () => {
  const StyledSkills = styled("div")(({ theme }) => ({
    background: "#ffffff",
    height: "50%",
    display: "flex",
    alignItems: "center",
    paddingTop: "50px", // Reduz o espaço superior
  }));

  const StyledText = styled(Typography)(({ theme }) => ({
    color: "#000000",
  }));

  const SkillBox = styled(Box)(({ theme }) => ({
    border: "1px solid #000000",
    borderRadius: "4px",
    padding: "8px", // Diminui o padding
    textAlign: "center",
    marginBottom: "16px",
  }));

  return (
    <StyledSkills>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <StyledText variant="h2" textAlign="center" pb={2}>
              Skills
            </StyledText>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} sm={6}>
                <SkillBox>
                  <StyledText variant="body1">JavaScript</StyledText>
                </SkillBox>
              </Grid>
              <Grid item xs={12} sm={6}>
                <SkillBox>
                  <StyledText variant="body1">React</StyledText>
                </SkillBox>
              </Grid>
              <Grid item xs={12} sm={6}>
                <SkillBox>
                  <StyledText variant="body1">Node.JS</StyledText>
                </SkillBox>
              </Grid>
              <Grid item xs={12} sm={6}>
                <SkillBox>
                  <StyledText variant="body1">GitHub</StyledText>
                </SkillBox>
              </Grid>
              <Grid item xs={12} sm={6}>
                <SkillBox>
                  <StyledText variant="body1">
                    Gestão de Bancos de Dados
                  </StyledText>
                </SkillBox>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledSkills>
  );
};

export default Skills;
