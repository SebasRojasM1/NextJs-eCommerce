import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <nav className="w-full bg-white py-2 flex justify-center border-t border-gray-300">
      <ul className="flex gap-8 list-none">
        <li className="relative group">
          <Link href="#" className="text-black font-bold px-4 py-2">
            Home <FontAwesomeIcon icon={faCaretDown} />
          </Link>
          <ul className="absolute hidden group-hover:block top-full left-3 bg-gray-300 rounded list-none">
            <li className="px-4 py-1 transition-colors duration-300 ease-in-out hover:bg-gray-200">
              <Link href="#" className="text-black text-sm">Subitem</Link>
            </li>
            <li className="px-4 py-1 transition-colors duration-300 ease-in-out hover:bg-gray-200">
              <Link href="#" className="text-black text-sm">Subitem</Link>
            </li>
          </ul>
        </li>
        <li className="relative group">
          <Link href="#" className="text-black font-bold px-4 py-2">
            Shop <FontAwesomeIcon icon={faCaretDown} />
          </Link>
          <ul className="absolute hidden group-hover:block top-full left-1 bg-gray-300 rounded list-none">
            <li className="px-4 py-1 transition-colors duration-300 ease-in-out hover:bg-gray-200">
              <Link href="#" className="text-black text-sm">Subitem</Link>
            </li>
            <li className="px-4 py-1 transition-colors duration-300 ease-in-out hover:bg-gray-200">
              <Link href="#" className="text-black text-sm">Subitem</Link>
            </li>
          </ul>
        </li>
        <li className="relative group">
          <Link href="#" className="text-black font-bold px-4 py-2">
            Products <FontAwesomeIcon icon={faCaretDown} />
          </Link>
          <ul className="absolute hidden group-hover:block top-full left-3 bg-gray-300 rounded list-none">
            <li className="px-4 py-1 transition-colors duration-300 ease-in-out hover:bg-gray-200">
              <Link href="#" className="text-black text-sm">Subitem</Link>
            </li>
            <li className="px-4 py-1 transition-colors duration-300 ease-in-out hover:bg-gray-200">
              <Link href="#" className="text-black text-sm">Subitem</Link>
            </li>
          </ul>
        </li>
        <li className="relative group">
          <Link href="#" className="text-black font-bold px-4 py-2">
            Pages <FontAwesomeIcon icon={faCaretDown} />
          </Link>
          <ul className="absolute hidden group-hover:block top-full left-3 bg-gray-300 rounded list-none">
            <li className="px-4 py-1 transition-colors duration-300 ease-in-out hover:bg-gray-200">
              <Link href="#" className="text-black text-sm">Subitem</Link>
            </li>
            <li className="px-4 py-1 transition-colors duration-300 ease-in-out hover:bg-gray-200">
              <Link href="#" className="text-black text-sm">Subitem</Link>
            </li>
          </ul>
        </li>
        <li className="relative group">
          <Link href="#" className="text-black font-bold px-4 py-2">
            Blog <FontAwesomeIcon icon={faCaretDown} />
          </Link>
          <ul className="absolute hidden group-hover:block top-full left-3 bg-gray-300 rounded list-none">
            <li className="px-4 py-1 transition-colors duration-300 ease-in-out hover:bg-gray-200">
              <Link href="#" className="text-black text-sm">Subitem</Link>
            </li>
            <li className="px-4 py-1 transition-colors duration-300 ease-in-out hover:bg-gray-200">
              <Link href="#" className="text-black text-sm">Subitem</Link>
            </li>
          </ul>
        </li>
        <li className="relative group">
          <Link href="#" className="text-black font-bold px-4 py-2">
            Buy now
          </Link>
        </li>
      </ul>
    </nav>
  );
}