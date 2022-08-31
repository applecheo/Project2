import { useNavigate } from "react-router-dom";
import { NavbarStyled } from "./styles";

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
        <h1>Musique</h1>
        <button onClick={navigateToPageHome}>Home</button>
        <button onClick={navigateToPageArtist}>Artist</button>
      </NavbarStyled>
    </>
  );
};

export default Navbar;
