import { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import DisplaySearchPlaylist from "../DisplaySearchPlaylist";
import DisplayVideo from "../DisplayVideo";
import {
  DisplayContainerStyled,
  DisplayStyled,
  InputStyled,
  NameOfArtistStyled,
} from "./styles";

const Display = ({ favorite, setFavorite }) => {
  const [input, SetInput] = useState("");
  const [artistId, setArtistId] = useState("");
  const [songLink, setSongLink] = useState("");
  const [playlist, setPlaylist] = useState([]);
  const [artistName, SetArtistName] = useState("");

  const inputHandler = (e) => {
    const userInput = e.target.value;
    SetInput(userInput);
  };

  const deBounceSearchArtist = useDebounce(input, 600);

  useEffect(() => {
    //cre8 file for link const
    const fetchIdData = async () => {
      const res = await fetch(
        `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${deBounceSearchArtist}`
      );
      const data = await res.json();
      setArtistId(data.artists[0]?.idArtist);
      SetArtistName(data);
    };
    if (deBounceSearchArtist) fetchIdData();
  }, [deBounceSearchArtist]);

  useEffect(() => {
    const fetchSongData = async () => {
      const res = await fetch(
        `https://theaudiodb.com/api/v1/json/2/mvid.php?i=${artistId}`
      );
      const data = await res.json();

      setPlaylist(data.mvids);
    };

    if (artistId) {
      fetchSongData();
    }
  }, [artistId]);

  const favoriteHandler = () => {
    const userFavorite = favorite.filter(
      (x) => x.name === artistName.artists?.[0]?.strArtist
    );
    if (userFavorite.length === 0) {
      setFavorite((prev) => {
        return [
          {
            name: artistName.artists?.[0]?.strArtist,
            picture: artistName.artists?.[0]?.strArtistThumb,
            biography: artistName.artists?.[0]?.strBiographyEN,
            favorite: true,
          },
          ...prev,
        ];
      });
    } else {
      setFavorite((prev) => {
        const test = favorite.find(
          (x) => x.name === artistName.artists?.[0]?.strArtist
        );
        test.favorite = true;
        return [...prev];
      });
    }
  };

  return (
    <>
      <InputStyled
        type="text"
        onChange={inputHandler}
        value={input}
        placeholder="Artist name"
      />
      <DisplayContainerStyled>
        <DisplayStyled>
          <NameOfArtistStyled>
            <h2>{artistName.artists?.[0]?.strArtist}</h2>

            <button onClick={favoriteHandler}>⭐</button>
          </NameOfArtistStyled>
          <DisplayVideo songLink={songLink} />
        </DisplayStyled>
        <DisplaySearchPlaylist playlist={playlist} setSongLink={setSongLink} />
      </DisplayContainerStyled>
    </>
  );
};

export default Display;
