import Navbar from '@/app/components/Navbar';
import "@/assets/styles/general/header.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faHeart, faCartShopping, faCaretDown} from '@fortawesome/free-solid-svg-icons';
import Logo from "@/assets/img/general/logos/logoCommerce.png"
import Image from 'next/image';


export default function Header() {
  return (
    <header className="header">
      <div className="topbar">
        <div className="languageSelector">
          <span>🇺🇸 USD <FontAwesomeIcon icon={faCaretDown} /></span>
          <span>English <FontAwesomeIcon icon={faCaretDown} /></span>
        </div>

        <div className="logo">
          <Image
            src={Logo}
            alt="logo"
            width={130}
            height={130}
          />
        </div>

        <div className="icons">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </div>
      <Navbar />
    </header>
  );
}