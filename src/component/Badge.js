import "../App.css";
import { useMediaQuery } from "react-responsive";
export default function Badge() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 992px)",
  });
  return (
    <div className="container pb-5">
      <div className="top-name">Kape Baracco</div>
      <div className="sub-caption">Exclusive Expresso Blend</div>
    </div>
  );
}
