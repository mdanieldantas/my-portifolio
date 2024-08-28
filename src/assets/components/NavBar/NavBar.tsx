import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";

const NavBar = () => {
  const StyledToolbar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "space-evenly",
  }));

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <AppBar position="absolute">
        <StyledToolbar>
          <MenuItem onClick={() => handleScroll("about")}>Sobre</MenuItem>
          <MenuItem onClick={() => handleScroll("skills")}>Skills</MenuItem>
          <MenuItem onClick={() => handleScroll("projects")}>Projetos</MenuItem>
        </StyledToolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
