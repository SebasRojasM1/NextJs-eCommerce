import Navbar from '@/app/components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faHeart, faCartShopping, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Logo from "@/assets/img/general/logos/logoCommerce.png";
import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex flex-col items-center border-b border-gray-300">
      <div className="flex w-full justify-between items-center px-5 py-0">
        <div className="flex gap-6 text-sm">
          <span>🇺🇸 USD <FontAwesomeIcon icon={faCaretDown} /></span>
          <span>English <FontAwesomeIcon icon={faCaretDown} /></span>
        </div>

        <div className="py-5 text-center text-xl font-bold">
          <Image src={Logo} alt="logo" width={130} height={130} />
        </div>

        <div className="flex gap-4 mr-4">
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