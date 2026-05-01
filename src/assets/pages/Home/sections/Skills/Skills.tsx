import { Container, Grid, styled, Typography, Box } from "@mui/material";

const Skills = () => {
  const StyledSkills = styled("div")(({}) => ({
    background: "#ffffff",
    height: "50%",
    display: "flex",
    alignItems: "center",
    paddingTop: "50px",
    paddingBottom: "50px",
  }));

  const StyledText = styled(Typography)(({}) => ({
    color: "#000000",
  }));

  const SkillBox = styled(Box)(({}) => ({
    border: "1px solid #000000",
    borderRadius: "4px",
    padding: "10px",
    textAlign: "center",
    marginBottom: "16px",
  }));

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Prisma ORM",
    "Supabase",
    "SQL",
    "Docker",
    "CI/CD · GitHub Actions",
    "Git · GitHub",
    "Tailwind CSS",
    "Vercel · Cloudflare",
    "Technical SEO · Core Web Vitals",
  ];

  return (
    <StyledSkills id="skills">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <StyledText variant="h2" textAlign="center" pb={2}>
              Skills
            </StyledText>
            <Grid container spacing={2} justifyContent="center">
              {skills.map((skill) => (
                <Grid item xs={12} sm={6} md={4} key={skill}>
                  <SkillBox>
                    <StyledText variant="body1">{skill}</StyledText>
                  </SkillBox>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledSkills>
  );
};

export default Skills;