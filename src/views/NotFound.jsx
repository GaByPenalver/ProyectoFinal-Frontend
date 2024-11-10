import { Link } from "react-router-dom";
import Carrousel from "./Carrousel";
import NavbarHome from "../components/NavbarHome";
import Footer from "./Footer";

const NotFound = () => {
  return (
    <>
    <NavbarHome/>
    <Carrousel/>
    <div className="notFound text-center">
      <h1>Detalle de la Pagina como imagenes y reseñas </h1>
      <img src="https://m.media-amazon.com/images/I/61JUKPlmpsS._AC_UF894,1000_QL80_.jpg" alt="" width={800} />
      <Link className="volver-inicio" to="/">
        Click para ir al Inicio
      </Link>
    </div>
    <Footer/>
    </>
  );
};

export default NotFound;