import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ViewArtistPage = ({ favorite, setFavorite }) => {
  const [toggle, setToggle] = useState({ bio: false });
  const handleBio = () => {
    toggle.bio === true ? setToggle({ bio: false }) : setToggle({ bio: true });
    console.log(favorite);
  };

  const removeFavoriteHandler = (e) => {
    const selected = e.target.innerText;
    setFavorite((prev) => {
      const test = favorite.find((x) => x.name === selected);
      test.favorite = false;
      return [...prev];
    });
  };
  return (
    <>
      <div>
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

        {
          <ul>
            {favorite.map((x) => (
              <li onClick={removeFavoriteHandler} key={uuidv4()}>
                {x.name}
              </li>
            ))}
          </ul>
        }
      </div>
    </>
  );
};
export default ViewArtistPage;
