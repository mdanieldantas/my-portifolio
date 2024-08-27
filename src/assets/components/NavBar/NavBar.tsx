// Importa os componentes necessários do Material-UI
import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";

// Define o componente NavBar
const NavBar = () => {
  // Cria um componente estilizado chamado StyledToolbar usando a função styled do Material-UI
  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex", // Define o estilo de exibição como flex (para alinhar os itens horizontalmente)
    justifyContent: "space-evenly", // Define o alinhamento dos itens com espaçamento igual
  }));

  // Retorna o JSX que será renderizado
  return (
    <>
      {/* Cria uma barra de aplicativo (AppBar) com posição absoluta */}
      <AppBar position="absolute">
        {/* Renderiza o StyledToolbar dentro da AppBar */}
        <StyledToolbar>
          {/* Renderiza os itens de menu */}
          <MenuItem>Sobre</MenuItem>
          <MenuItem>Skills</MenuItem>
          <MenuItem>Projectos</MenuItem>
        </StyledToolbar>
      </AppBar>
    </>
  );
};

// Exporta o componente NavBar para uso em outros lugares
export default NavBar;
