import { useState } from "react";

const ViewArtistPage = ({ favorite }) => {
  const [toggle, setToggle] = useState({ bio: false });
  const handleBio = () => {
    toggle.bio === true ? setToggle({ bio: false }) : setToggle({ bio: true });
    console.log(favorite);
  };
  return (
    <>
      <div>
        {}
        {favorite?.[0]?.picture && (
          <img
            style={{ width: 400, height: 400 }}
            src={favorite?.[0]?.picture}
          />
        )}
        <button onClick={handleBio}>Biography</button>
        {toggle.bio ? (
          <p style={{ width: 400, height: 400 }}>{favorite?.[0]?.biography}</p>
        ) : (
          <p></p>
        )}
      </div>
    </>
  );
};
export default ViewArtistPage;
