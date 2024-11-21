import { NavLink } from "react-router-dom";
import netflixlogo from "../assets/netflixlogo.jpeg";
import profileimg from "../assets/profileimg.png";
import ImageTag from "./ImageTag";

function NavBar() {
  const NavTitles = [
    { src: "/TvShows", title: "Tv Shows" },
    { src: "/Features", title: "Features" },
    { src: "/RecentlyAdded", title: "RecentlyAdded" },
    { src: "/MyList", title: "MyList" },
  ];
  return (
    <div className="navbar-container">
      <div>
        <ImageTag img={netflixlogo} styleclass="netflix-logo" />
        {NavTitles.map((navbar, index) => (
          <NavLink to={navbar.src} key={index} className="navbar-links">
            {navbar.title}
          </NavLink>
        ))}
      </div>
      <div className="navbar-icons">
        <i className="fa fa-podcast" aria-hidden="true" />
        <i className="fa fa-search" aria-hidden="true" />
        <ImageTag img={profileimg} styleclass="profile-logo" />
      </div>
    </div>
  );
}

export default NavBar;