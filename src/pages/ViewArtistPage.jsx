import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import DropDown from "../components/DropDown";

const ViewArtistPage = ({ favorite, setFavorite }) => {
  const [toggle, setToggle] = useState({ biography: false });
  const biographyHandler = () => {
    toggle.biography === true
      ? setToggle({ biography: false })
      : setToggle({ biography: true });
    const artistBiography = favorite.filter((x) => x.displayArtist === true);
    artistBiography?.[0]?.biography;
    setToggle((prev) => ({
      ...prev,
      biographyText: artistBiography?.[0]?.biography,
    }));
  };

  const removeFavoriteHandler = (e) => {
    const selected = e.target.innerText;
    setFavorite((prev) => {
      const unFavorite = favorite.find((x) => x.name === selected);
      unFavorite.favorite = false;
      return [...prev];
    });
  };
  return (
    <>
      <div>
        {favorite.map(
          (x) =>
            x.displayArtist === true && (
              <img
                src={x.picture}
                style={{ width: 400, height: 400 }}
                key={uuidv4()}
              />
            )
        )}
        <button onClick={biographyHandler}>View Bio</button>
        {toggle.biography === true && (
          <p style={{ width: 400, height: 400 }}>{toggle.biographyText}</p>
        )}

        {
          <ul>
            {favorite.map(
              (x) =>
                x.favorite && (
                  <li onClick={removeFavoriteHandler} key={uuidv4()}>
                    {x.name}
                  </li>
                )
            )}
          </ul>
        }
      </div>
      <DropDown favorite={favorite} setFavorite={setFavorite} />
    </>
  );
};
export default ViewArtistPage;
