import "./Logo.scss";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <h1 className="logo">Youni</h1>
    </Link>
  );
};

export default Logo;
