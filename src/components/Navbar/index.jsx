import { useNavigate } from "react-router-dom";
import { ButtonStyled, NavbarStyled } from "./styles";

const Navbar = (showInput = { showInput }) => {
  let navigate = useNavigate();
  const navigateToPageHome = () => {
    navigate("/home");
  };
  const navigateToPageArtist = () => {
    navigate("/artists");
  };
  return (
    <>
      <NavbarStyled>
        <h1>
          <span>🎵</span>Musique
        </h1>
        <ButtonStyled>
          <button onClick={navigateToPageHome}>Home</button>
          <button onClick={navigateToPageArtist}>Artist</button>
        </ButtonStyled>
      </NavbarStyled>
    </>
  );
};

export default Navbar;
