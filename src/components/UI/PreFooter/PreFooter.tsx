import {
  DiscordFilled,
  FacebookFilled,
  InstagramFilled,
} from "@ant-design/icons";
import "./PreFooter.scss";

export default function PreFooter() {
  return (
    <div className="prefooter">
      <div className="prefooter__info">
        <p>
          <span>Адрес:</span> Ул. Адрес студии д.1
        </p>
        <p>
          <span>Номер телефона:</span> +7 999 999 99 99
        </p>
      </div>
      <div className="prefooter__social">
        <label>Соцсети:</label>
        <div className="prefooter__icons">
          <InstagramFilled />
          <FacebookFilled />
          <DiscordFilled />
        </div>
      </div>
    </div>
  );
}
