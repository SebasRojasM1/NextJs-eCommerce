import Link from "next/link";
import '@/assets/styles/Home/navbar.scss';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navList">
        <li className="navItem">
          <Link href="#">Home</Link>
          <ul className="dropdown">
            <li><Link href="#">Subitem 1</Link></li>
            <li><Link href="#">Subitem 2</Link></li>
          </ul>
        </li>
        <li className="navItem">
          <Link href="#">Shop</Link>
          <ul className="dropdown">
            <li><Link href="#">Subitem 1</Link></li>
            <li><Link href="#">Subitem 2</Link></li>
          </ul>
        </li>
        <li className="navItem">
          <Link href="#">Products</Link>
          <ul className="dropdown">
            <li><Link href="#">Subitem 1</Link></li>
            <li><Link href="#">Subitem 2</Link></li>
          </ul>
        </li>
        <li className="navItem">
          <Link href="#">Pages</Link>
          <ul className="dropdown">
            <li><Link href="#">Subitem 1</Link></li>
            <li><Link href="#">Subitem 2</Link></li>
          </ul>
        </li>
        <li className="navItem">
          <Link href="#">Blog</Link>
          <ul className="dropdown">
            <li><Link href="#">Subitem 1</Link></li>
            <li><Link href="#">Subitem 2</Link></li>
          </ul>
        </li>
        <li className="navItem">
          <Link href="#">Buy now</Link>
        </li>
      </ul>
    </nav>
  );
}