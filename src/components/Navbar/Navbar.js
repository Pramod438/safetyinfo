import "./Navbar.css";
import avatar from "../../assets/img_avatar.png";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <div className="logo">
          <a href="#">
            <img src={logo} />
          </a>
        </div>
      </div>
      <div className="navbar__left">
        <a href="#" className="">
          Dashboard
        </a>
        <a href="#" className="active_link">
          Process
        </a>
        <a className="" href="#">
          Safety Scoreboard
        </a>
      </div>
      <div className="navbar__right">
        <a href="#">
          <i className="fa fa-bell" aria-hidden="true"></i>
        </a>
        <div class="avatar_box">
          <div className="avatar_name">David morse</div>
          <div className="avatar_role">Admin</div>
        </div>
        <a href="#!" className="avatar_img">
          <img src={avatar} alt="avatar" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
