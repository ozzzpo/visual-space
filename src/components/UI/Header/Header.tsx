import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
import logo from "/photo.png";
export default function Header() {
  const location = useLocation();
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <img src={logo} alt="" />
          </div>
          <div className="header__navigation">
            <Link
              to="about-us"
              className={`header__link ${
                location.pathname.slice(1) === "about-us" &&
                "header__link--active"
              }`}
            >
              О нас
            </Link>
            <Link
              to="services"
              className={`header__link ${
                location.pathname.slice(1) === "services" &&
                "header__link--active"
              }`}
            >
              Услуги
            </Link>
            <Link
              to="our-works"
              className={`header__link ${
                location.pathname.slice(1) === "our-works" &&
                "header__link--active"
              }`}
            >
              Наши работы
            </Link>
          </div>
          <div className="header__phone">
            <p>+7 999 999 99 99</p>
          </div>
        </div>
      </div>
    </header>
  );
}
