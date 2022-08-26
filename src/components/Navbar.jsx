import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <h1 style={{ backgroundColor: "pink" }}>Musique</h1>
        <Link to="/Home">Go to home page............. </Link>
        <Link to="/Artists">View Artist............. </Link>
      </div>
    </>
  );
};

export default Navbar;
