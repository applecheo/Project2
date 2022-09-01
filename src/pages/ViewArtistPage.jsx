import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import DropDown from "../components/DropDown";
import {
  BiographyStyled,
  ContainerStyled,
  ListOfFavoriteStyled,
} from "./ViewArtistPageStyles";
const ViewArtistPage = ({ favorite, setFavorite }) => {
  const [toggle, setToggle] = useState({ biography: false });
  const biographyHandler = () => {
    toggle.biography === true
      ? setToggle({ biography: false })
      : setToggle({ biography: true });
    const artistBiography = favorite.filter((x) => x.displayArtist === true);
    const getArtistBiography = artistBiography?.[0]?.biography;
    setToggle((prev) => ({
      ...prev,
      biographyText: getArtistBiography,
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
      <ContainerStyled>
        <ListOfFavoriteStyled>
          <h3>Favorite Artists</h3>
          <DropDown favorite={favorite} setFavorite={setFavorite} />
          {
            <ul>
              {favorite.map(
                (x) =>
                  x.favorite && (
                    <li
                      onClick={removeFavoriteHandler}
                      key={uuidv4()}
                      className="favorite"
                    >
                      {x.name}
                    </li>
                  )
              )}
            </ul>
          }
        </ListOfFavoriteStyled>
        <BiographyStyled>
          {favorite.map(
            (x) =>
              x.displayArtist === true && <img src={x.picture} key={uuidv4()} />
          )}
          {favorite.length >= 1 && (
            <button onClick={biographyHandler}>View Bio</button>
          )}
        </BiographyStyled>

        {toggle.biography === true && <p>{toggle.biographyText}</p>}
      </ContainerStyled>
    </>
  );
};
export default ViewArtistPage;
