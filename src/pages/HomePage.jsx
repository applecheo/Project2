import Display from "../components/Display";
import { HomePageStyled } from "./HomePageStyles";

const HomePage = ({ favorite, setFavorite, name }) => {
  return (
    <HomePageStyled>
      <h2 className="welcome">
        Welcome <span>{name}!</span>
      </h2>
      <Display favorite={favorite} setFavorite={setFavorite} />
    </HomePageStyled>
  );
};

export default HomePage;
