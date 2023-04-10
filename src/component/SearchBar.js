import { useMediaQuery } from "react-responsive";
import "../App.css";

export default function SearchBar() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 992px)",
  });
  return isDesktop ? (
    <>
      <div className="search-bar w-100 align-items-center">
        <input className="outline-none" />
        <button type="submit" className="outline-none">
          <i
            class="bi bi-search"
            style={{ fontSize: "1.25rem", color: "black" }}
          ></i>
        </button>
      </div>
    </>
  ) : (
    <>
      <div className="search-bar w-75 justify-content-evenly mx-auto my-3">
        <input className="outline-none w-75 h4" />
        <button type="submit" className="outline-none">
          <i
            class="bi bi-search"
            style={{ fontSize: "1.8rem", color: "black" }}
          ></i>
        </button>
      </div>
    </>
  );
}
