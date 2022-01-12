import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav>
      <Link to="/cheese">
        <div>Index Page</div>
      </Link>
    </nav>
  );
}

export default Header;
