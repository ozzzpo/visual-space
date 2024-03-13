import { DiscordFilled, FacebookFilled } from "@ant-design/icons";
import "./Footer.scss";
import logo from "/photo.svg";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__logo">
            <img src={logo} alt="#" />
            <p>
              <p>© Visual Space 2023.</p> Использование сайта, в том числе
              подача объявлений, означает согласие с{" "}
              <span>пользовательским соглашением</span>
            </p>
          </div>
          <div className="footer__info">
            <h3>О нас</h3>
            <h3>Наши работы</h3>
            <p>Экстерьер</p>
            <p>Интерьер</p>
            <p>3D модели</p>
            <p>Web - Дизайн</p>
          </div>
          <div className="footer__services">
            <h3>Услуги</h3>
            <p>Архитектурная визуализация</p>
            <p>Визуализация интерьера</p>
            <p>Создание 3D моделей</p>
            <p>Web - дизайн</p>
            <p>Конструктор</p>
          </div>
          <div className="footer__contacts">
            <h3>Контакты</h3>
            <p>+7 999 999 99 99</p>
            <p>E - mail</p>
            <div className="footer__icons">
              <DiscordFilled />
              <FacebookFilled />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
