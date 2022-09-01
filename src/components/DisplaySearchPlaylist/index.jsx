import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  DisplaySearchPlaylistStyled,
  QueuedSongStyled,
  SearchedSongStyled,
} from "./styles";

const DisplaySearchPlaylist = ({ playlist, setSongLink, artistName }) => {
  const [userSongChoice, setUserSongChoice] = useState("");
  const [addToQueue, setAddToQueue] = useState([]);
  const [displayQueuedSong, setDisplayQueuedSong] = useState("");

  const selectedSongLink = (e) => {
    const userInput = e.target.innerText;
    {
      const chosenSong = playlist
        .filter((x) => x.strTrack === userInput)
        .find((x) => x.strMusicVid);
      setSongLink(chosenSong?.strMusicVid);
      setUserSongChoice(chosenSong?.strTrack);
    }
  };

  const addToQueueHandler = (albumDetails) => () => {
    addToQueue.length === 0 &&
      setAddToQueue((prev) => {
        return [
          ...prev,
          {
            PlayingNext: true,
            strMusicVid: albumDetails?.strMusicVid,
            strTrack: albumDetails?.strTrack,
          },
        ];
      });
    addToQueue.length >= 1 &&
      setAddToQueue((prev) => {
        return [
          ...prev,
          {
            PlayingNext: false,
            strMusicVid: albumDetails?.strMusicVid,
            strTrack: albumDetails?.strTrack,
          },
        ];
      });
  };

  const playNextVideo = () => {
    const filtered = addToQueue.filter((x) => x?.PlayingNext === false);
    setAddToQueue(filtered);

    if (filtered.length >= 1) {
      setAddToQueue((prev) => {
        const getNameOfSong = filtered.find(
          (x) => x.strTrack === filtered[0].strTrack
        );
        getNameOfSong.PlayingNext = true;
        return [...prev];
      });
    }
    setSongLink(addToQueue?.[0]?.strMusicVid);
  };

  useEffect(() => {
    const displayName = addToQueue.find((x) => x?.PlayingNext === true);
    setDisplayQueuedSong(displayName?.strTrack);
  }, [addToQueue]);
  return (
    <>
      <DisplaySearchPlaylistStyled>
        <SearchedSongStyled>
          {artistName.artists?.[0]?.strArtist && (
            <button onClick={playNextVideo} className="playNextButton">
              Play Next
            </button>
          )}

          <ul>
            {playlist?.map((albumDetails) => (
              <div key={uuidv4()}>
                <li onClick={selectedSongLink}>{albumDetails.strTrack}</li>
                <button
                  key={uuidv4()}
                  onClick={addToQueueHandler(albumDetails)}
                >
                  Queue
                </button>
              </div>
            ))}
          </ul>
        </SearchedSongStyled>
        <QueuedSongStyled>
          <ol>
            {artistName.artists?.[0]?.strArtist && <p>Queued songs</p>}
            {addToQueue.map((x) => (
              <li key={uuidv4()}>{x.strTrack}</li>
            ))}
          </ol>
        </QueuedSongStyled>
      </DisplaySearchPlaylistStyled>
      {/* <p>
        Next in queue: <span>{displayQueuedSong}</span>
      </p> */}
    </>
  );
};
export default DisplaySearchPlaylist;
