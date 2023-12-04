import logo from "../assets/logo.svg";
import "../sass/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="left">
        <span>My balance</span>
        <span>$921.48</span>
      </div>
      <div className="right">
        <img src={logo} alt="logo" />
      </div>
    </header>
  );
};

export default Header;
