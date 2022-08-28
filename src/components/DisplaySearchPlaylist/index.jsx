import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const DisplaySearchPlaylist = ({ playlist, setSongLink }) => {
  const [userSongChoice, setUserSongChoice] = useState("");
  const selectedSongLink = (e) => {
    const userInput = e.target.innerText;
    {
      const chosenSong = playlist
        .filter((x) => x.strTrack === userInput)
        .find((x) => x.strMusicVid);
      setSongLink(chosenSong.strMusicVid);
      setUserSongChoice(chosenSong.strTrack);
    }
  };
  return (
    <>
      <h2>
        Selected song: <span>{userSongChoice}</span>
      </h2>
      <ul>
        {playlist?.map((x) => (
          <li onClick={selectedSongLink} key={uuidv4()}>
            {x.strTrack}
          </li>
        ))}
      </ul>
    </>
  );
};
export default DisplaySearchPlaylist;
