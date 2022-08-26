import Display from "../components/Display";

const HomePage = ({ favorite, setFavorite }) => {
  return (
    <h2>
      Welcome <span>Jun Jie</span>
      <Display favorite={favorite} setFavorite={setFavorite} />
    </h2>
  );
};

export default HomePage;
