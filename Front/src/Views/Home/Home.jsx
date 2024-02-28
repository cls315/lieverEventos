import Cards from "../../Components/Cards/Cards";
import Carousel from "../../Components/Carousel/Carousel";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

import style from "./Home.module.css";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../redux/actions";

const Home = () => {
  const { ul } = style;

  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <div>
        <SearchBar />
      </div>
      <div>
        <Carousel />
      </div>

      <Cards products={products} />

      <hr />

      <footer>
        <div class="container text-center">
          <div class="row align-items-center">
            <div class="col">
              <ul className={ul}>
                <h5>Categorías</h5>
                <li>Inicio</li>
                <li>Productos</li>
              </ul>
            </div>
            <div class="col">
              <ul className={ul}>
                <h5>Contactanos</h5>
                <li>lievereventos@gmail.com</li>
                <li>Direccion 123</li>
              </ul>
            </div>
            <div className="col">
              <h5>Sigamos conectados</h5>
              <ul className={ul}>
                <li>
                  <FontAwesomeIcon icon={faInstagram} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faFacebook} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
