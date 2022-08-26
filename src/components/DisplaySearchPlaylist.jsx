import { v4 as uuidv4 } from "uuid";

const DisplaySearchPlaylist = ({ playlist }) => {
  const selectedSongLink = (e) => {
    // {
    //   const compliedSongLink = playlist.map((x) => x.strMusicVid);
    //   console.log(compliedSongLink);
    // }
    const clicked = e.target.innerText;
    console.log(clicked);
    {
      const compliedSongName = playlist
        .map((x) => x.strTrack)
        .find((x) => x === clicked);

      const test = playlist.filter((x) => x.strTrack === clicked);
      console.log(test);
      console.log(playlist);
      console.log(compliedSongName);
    }
  };
  return (
    <>
      <ul>
        {playlist?.map((x) => (
          <li onClick={selectedSongLink} key={uuidv4()}>
            {x.strTrack}
          </li>
        ))}
      </ul>
      {/* url cat for unique id */}
    </>
  );
};
export default DisplaySearchPlaylist;
