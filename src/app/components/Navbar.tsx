import Link from "next/link";
import '@/assets/styles/Home/navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown} from '@fortawesome/free-solid-svg-icons';


export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navList">
        <li className="navItem">
          <Link href="#">Home <FontAwesomeIcon icon={faCaretDown} /></Link>
          <ul className="dropdown">
            <li><Link href="#">Subitem</Link></li>
            <li><Link href="#">Subitem</Link></li>
          </ul>
        </li>
        <li className="navItem">
          <Link href="#">Shop <FontAwesomeIcon icon={faCaretDown} /></Link>
          <ul className="dropdown">
            <li><Link href="#">Subitem</Link></li>
            <li><Link href="#">Subitem</Link></li>
          </ul>
        </li>
        <li className="navItem">
          <Link href="#">Products <FontAwesomeIcon icon={faCaretDown} /></Link>
          <ul className="dropdown">
            <li><Link href="#">Subitem</Link></li>
            <li><Link href="#">Subitem</Link></li>
          </ul>
        </li>
        <li className="navItem">
          <Link href="#">Pages <FontAwesomeIcon icon={faCaretDown} /></Link>
          <ul className="dropdown">
            <li><Link href="#">Subitem</Link></li>
            <li><Link href="#">Subitem</Link></li>
          </ul>
        </li>
        <li className="navItem">
          <Link href="#">Blog <FontAwesomeIcon icon={faCaretDown} /></Link>
          <ul className="dropdown">
            <li><Link href="#">Subitem</Link></li>
            <li><Link href="#">Subitem</Link></li>
          </ul>
        </li>
        <li className="navItem">
          <Link href="#">Buy now</Link>
        </li>
      </ul>
    </nav>
  );
}