import Navbar from '@/app/components/Navbar';
import "@/assets/styles/Home/header.scss"

export default function Header() {
  return (
    <header className="header">
      <div className="topbar">
        <div className="languageSelector">
          <span>🇺🇸 USD</span>
          <span>English</span>
        </div>

        <div className="logo">
            <h1>ecomus</h1>
        </div>

        <div className="icons">
          <i className="fa fa-search"></i>
          <i className="fa fa-user"></i>
          <i className="fa fa-heart"></i>
          <i className="fa fa-shopping-cart"></i>
        </div>
      </div>
      <Navbar />
    </header>
  );
}