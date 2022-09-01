import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  DisplaySearchPlaylistStyled,
  QueuedSongStyled,
  SearchedSongStyled,
} from "./styles";

const DisplaySearchPlaylist = ({
  playlist,
  setSongLink,
  artistName,
  setDisplayQueuedSong,
}) => {
  const [addToQueue, setAddToQueue] = useState([]);

  const selectedSongLink = (e) => {
    const userInput = e.target.innerText;
    {
      const chosenSong = playlist
        .filter((x) => x.strTrack === userInput)
        .find((x) => x.strMusicVid);
      setSongLink(chosenSong?.strMusicVid);
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
    const isNotPlayingNext = addToQueue.filter((x) => x?.PlayingNext === false);
    setAddToQueue(isNotPlayingNext);

    if (isNotPlayingNext.length >= 1) {
      setAddToQueue((prev) => {
        const getNameOfSong = isNotPlayingNext.find(
          (x) => x.strTrack === isNotPlayingNext[0].strTrack
        );
        getNameOfSong.PlayingNext = true;
        return [...prev];
      });
    }
    const NextInQueueLink = addToQueue?.[0]?.strMusicVid;
    setSongLink(NextInQueueLink);
  };

  useEffect(() => {
    const isPlayingNext = addToQueue.find((x) => x?.PlayingNext === true);
    const playingNextSong = isPlayingNext?.strTrack;
    setDisplayQueuedSong(playingNextSong);
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
    </>
  );
};
export default DisplaySearchPlaylist;
