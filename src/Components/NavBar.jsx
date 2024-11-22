import { NavLink } from "react-router-dom";
import netflixLogo from "../assets/netflixLogo.jpeg";
import profileImg from "../assets/profileImg.png";
import Image from "./Image";
import Icon from "./Icon";

function NavBar() {
  const navTitles = [
    { path: "/tvShows", title: "Tv Shows" },
    { path: "/features", title: "Features" },
    { path: "/recently-Added", title: "RecentlyAdded" },
    { path: "/myList", title: "MyList" },
  ];
  return (
    <div className="navbar-container">
      <div>
        <Image src={netflixLogo} className="netflix-logo" />
        {navTitles.map((navbar, index) => (
          <NavLink to={navbar.path} key={index} className="navbar-link">
            {navbar.title}
          </NavLink>
        ))}
      </div>
      <div className="navbar-icons">
        <Icon className="fa fa-podcast" />
        <Icon className="fa fa-search" />
        <Image src={profileImg} className="profile-logo" />
      </div>
    </div>
  );
}

export default NavBar;
