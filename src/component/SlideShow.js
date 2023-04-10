import Carousel from "react-bootstrap/Carousel";
import product1 from "../images/product1.jpg";
import product2 from "../images/product2.jpg";
import product3 from "../images/product3.jpg";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import "../App.css";

export default function SlideShow() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 992px)",
  });
  return isDesktop ? <Desktop /> : <Phone />;
}

function Desktop() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block fuild mx-auto"
          src={product1}
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block fuild mx-auto"
          src={product2}
          alt="Second slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block fuild mx-auto"
          src={product3}
          alt="Third slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100 mx-auto"
          src="https://cdn.shopify.com/s/files/1/2062/4231/files/Subscribe_Save-HomepageHeader.jpg?v=1676621513"
          alt="Third slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}

function Phone() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={product1} alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={product2} alt="Second slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={product3} alt="Third slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
