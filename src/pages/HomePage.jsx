import Display from "../components/Display";

const HomePage = ({ favorite, setFavorite, name }) => {
  return (
    <h2>
      Welcome <span>{name}!</span>
      <Display favorite={favorite} setFavorite={setFavorite} />
    </h2>
  );
};

export default HomePage;
