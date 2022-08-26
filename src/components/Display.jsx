import { useEffect } from "react";
import { useState } from "react";
import useDebounce from "./UseDebounce";
import DisplayVideo from "./DisplayVideo";
import DisplaySearchPlaylist from "./DisplaySearchPlaylist";

const Display = () => {
  const [input, SetInput] = useState("");
  const [artistId, setArtistId] = useState("");
  const [songLink, setSongLink] = useState("");
  const [playlist, setPlaylist] = useState([]);

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
      console.log(deBounceSearchArtist);
    };
    if (deBounceSearchArtist) fetchIdData();
  }, [deBounceSearchArtist]);

  useEffect(() => {
    const fetchSongData = async () => {
      const res = await fetch(
        `https://theaudiodb.com/api/v1/json/2/mvid.php?i=${artistId}`
      );
      const data = await res.json();
      setSongLink(data.mvids?.[2]?.strMusicVid);
      setPlaylist(data.mvids);
      console.log(songLink);
    };

    if (artistId) fetchSongData();
  }, [artistId]);
  //can add another element to run

  return (
    <div className="App">
      <input
        type="text"
        onChange={handleInput}
        value={input}
        placeholder="Artist name"
      />

      <h1>{deBounceSearchArtist}</h1>

      <DisplayVideo songLink={songLink} />

      <DisplaySearchPlaylist playlist={playlist} />
    </div>
  );
};

export default Display;
