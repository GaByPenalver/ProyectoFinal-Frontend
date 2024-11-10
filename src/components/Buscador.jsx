import { createContext, useEffect, useState } from "react";

// Creación del context
export const ShoesContext = createContext();

// Provider con la fuente de datos
const ShoesProvider = ({children}) => {
  const [shoes, setShoes] = useState([]);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    getShoes();
  }, []);

  // Obtener las pizzas
  const getShoes = async () => {
    const res = await fetch("/HITO2/shoes.json");
    const shoes = await res.json();
    setShoes(shoes);
  };

  // Funciones para el carro
  const addToCart = ({ id, price, name, img }) => {
    const productoEcontradoIndex = carrito.findIndex((p) => p.id === id);
    const producto = { id, price, name, img, count: 1 };

    if (productoEcontradoIndex >= 0) {
      carrito[productoEcontradoIndex].count++;
      setCarrito([...carrito]);
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  const increment = (i) => {
    carrito[i].count++;
    setCarrito([...carrito]);
  };

  const decrement = (i) => {
    const { count } = carrito[i];
    if (count === 1) {
      carrito.splice(i, 2);
    } else {
      carrito[i].count--;
    }
    setCarrito([...carrito]);
  };

  return (
    <ShoesContext.Provider
      value={{ shoes, carrito, setCarrito, addToCart, increment, decrement }}
    >
      {children}
    </ShoesContext.Provider>
  );
};

export default ShoesProvider;
