import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Carousel } from "antd";
import { contentStyle } from "../../../utils/constants/CarouselImageStyle";
import "./Visual.scss";
import useImages from "../../../utils/hooks/useImages";
import { Link as ScrollLink } from "react-scroll";
export default function Visual() {
  const images = useImages();
  return (
    <div className="visual">
      <div className="visual__content">
        <h1 className="visual__title">Архитектурная визуализация</h1>
        <p className="visual__p">
          Оставьте заявку и мы подберем для вас лучшие решения по самой выгодной
          цене{" "}
        </p>
        <ScrollLink to="form" smooth>
          <Button type="primary" size="large">
            Оставить заявку
          </Button>
        </ScrollLink>
      </div>
      <div className="visual__carousel">
        <Carousel
          arrows
          prevArrow={<LeftOutlined />}
          nextArrow={<RightOutlined />}
        >
          {images?.hits.map((image) => (
            <div key={image.id}>
              <img
                src={image.largeImageURL}
                alt="Невозожно загрузить изображение"
                style={contentStyle}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
