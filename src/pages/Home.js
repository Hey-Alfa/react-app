import SlideShow from "../component/SlideShow";
import Badge from "../component/Badge";
import ProductCard from "../component/ProdcutCard";
import Lable from "../component/Lable";
import logo from "../images/logo-2.png";
import SearchBar from "../component/SearchBar";
import image1 from "../images/image1.jpg";
import image3 from "../images/image3.jpg";
import Footer from "../component/Footer";

import { Container } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
export default function Home() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 992px)",
  });
  return isDesktop ? (
    <>
      <Container fluid>
        <Badge />
        <SlideShow />
        <Lable />
        <ProductCard />
      </Container>
      <h2 className="px-3 py-2 text-center">
        "Awaken your senses with the bold and rich flavor of our premium
        coffee."
      </h2>
      <Container className="mw-100 mx-0 p-0 bg-blur">
        <div className="w-100">
          <div className="d-flex justify-content-center p-3">
            <img src={image1} alt="Shop" className="mw-50 rounded " />
            <div className="px-4 my-auto">
              <h2 className="text-center py-3">Our promises</h2>
              <ul>
                <li>
                  Hand-selected, ethically-sourced coffee beans from around the
                  world
                </li>
                <li>
                  Expert roasting techniques to bring out the unique flavors of
                  each blend
                </li>
                <li>
                  State-of-the-art brewing equipment for a consistently perfect
                  cup every time
                </li>
                <li>
                  Timely and reliable service from our knowledgeable technicians
                </li>
                <li>
                  Ongoing training and support for your staff to ensure a
                  top-notch coffee experience
                </li>
                <li>
                  Decades of experience and passion for the art of
                  coffee-making, reflected in every sip
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </>
  ) : (
    <>
      <Container>
        <Logo />
        <SearchBar />
        <SlideShow />
        <Lable />
        <ProductCard />
      </Container>
      <h3 className="px-3 py-2 text-center">
        "Awaken your senses with the bold and rich flavor of our premium
        coffee."
      </h3>
      <Container className="mw-100 mx-0 p-0">
        <div className="w-100 d-flex justify-content-center">
          <div className="my-auto">
            <img src={image3} alt="Shop" className="w-100 rounded " />
          </div>

          <div className="px-4 my-auto">
            <h2 className="text-center py-3">Our promises</h2>
            <ul>
              <li>
                Hand-selected, ethically-sourced coffee beans from around the
                world
              </li>
              <li>
                Expert roasting techniques to bring out the unique flavors of
                each blend
              </li>
              <li>
                State-of-the-art brewing equipment for a consistently perfect
                cup every time
              </li>
              <li>
                Timely and reliable service from our knowledgeable technicians
              </li>
              <li>
                Ongoing training and support for your staff to ensure a
                top-notch coffee experience
              </li>
              <li>
                Decades of experience and passion for the art of coffee-making,
                reflected in every sip
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <Container className="py-5 my-5" fluid>
        <Footer />
      </Container>
    </>
  );
}

export function Logo() {
  return (
    <div className="d-flex justify-content-center">
      <img src={logo} width="150" className="" alt="Logo" />
    </div>
  );
}
