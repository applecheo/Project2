import { useEffect, useState } from "react";
import useDebounce from "./UseDebounce";
import DisplayVideo from "./DisplayVideo";
import DisplaySearchPlaylist from "./DisplaySearchPlaylist";

const Display = ({ favorite, setFavorite }) => {
  const [input, SetInput] = useState("");
  const [artistId, setArtistId] = useState("");
  const [songLink, setSongLink] = useState("");
  const [playlist, setPlaylist] = useState([]);
  const [artistName, SetArtistName] = useState("");

  const handleInput = (e) => {
    const userInput = e.target.value;
    SetInput(userInput);
  };

  const deBounceSearchArtist = useDebounce(input, 600);

  useEffect(() => {
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
      setSongLink(data.mvids?.[0]?.strMusicVid);
      setPlaylist(data.mvids);
    };

    if (artistId) fetchSongData();
  }, [artistId]);

  const favoriteHandler = () => {
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
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleInput}
        value={input}
        placeholder="Artist name"
      />

      <h1>
        {artistName.artists?.[0]?.strArtist}
        <button onClick={favoriteHandler}>F</button>
      </h1>

      <DisplayVideo songLink={songLink} />

      <DisplaySearchPlaylist playlist={playlist} setSongLink={setSongLink} />
    </div>
  );
};

export default Display;
