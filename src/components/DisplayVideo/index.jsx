import { useEffect, useState } from "react";

const DisplayVideo = ({ songLink }) => {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    const playVideo = () => {
      const str = songLink;
      const res = str?.split("=");
      const embeddedUrl =
        "https://www.youtube.com/embed/" +
        res?.[1] +
        "?ecver=1&amp;autoplay=1&amp;iv_load_policy=3&amp;rel=0&amp;showinfo=0&amp;yt:stretch=16:9&amp;autohide=1&amp";
      setDisplay(embeddedUrl);
    };
    playVideo();
  }, [songLink]);

  return (
    <div className="container">
      {songLink && (
        <iframe
          width="750px"
          height="550px"
          src={`${display}`}
          frameBorder="0"
          loading="lazy"
          scrolling="no"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen;gyroscope; picture-in-picture"
        />
      )}
    </div>
  );
};
export default DisplayVideo;
