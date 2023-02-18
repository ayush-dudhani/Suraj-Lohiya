import "./navbar.css";
import { Link } from "react-scroll";
export default function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-name">Suraj Lohiya</div>

      <ul className="nav-list">
        <li className="nav-item">
          <Link
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="achievements"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Achievements
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="follow"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
          >
            Connect
          </Link>
        </li>
      </ul>
    </div>
  );
}
