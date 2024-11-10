import { createContext, useEffect, useState } from "react";

// Creación del context
export const shoesContext = createContext();

// Provider con la fuente de datos
const ShoesProvider = ({ children }) => {
  const [shoes, setShoes] = useState([]);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    getShoes();
  }, []);

  // Obtener los zapatos
  const getShoes = async () => {
    const res = await fetch("/HITO2/shoes.json");
    const shoesData = await res.json();
    setShoes(shoesData);
  };

  // Funciones para el carrito
  const addToCart = ({ id, price, name, img }) => {
    const productoEncontradoIndex = carrito.findIndex((p) => p.id === id);
    const producto = { id, price, name, img, count: 1 };

    if (productoEncontradoIndex >= 0) {
      // Evitar la mutación directa, crear una nueva copia con el count actualizado
      const updatedCarrito = [...carrito];
      updatedCarrito[productoEncontradoIndex].count++;
      setCarrito(updatedCarrito);
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  const increment = (i) => {
    const updatedCarrito = [...carrito];
    updatedCarrito[i].count++;
    setCarrito(updatedCarrito);
  };

  const decrement = (i) => {
    const updatedCarrito = [...carrito];
    const { count } = updatedCarrito[i];
    if (count === 1) {
      updatedCarrito.splice(i, 1); // Eliminar un solo producto
    } else {
      updatedCarrito[i].count--;
    }
    setCarrito(updatedCarrito);
  };

  return (
    <shoesContext.Provider
      value={{ shoes, carrito, setCarrito, addToCart, increment, decrement }}
    >
      {children}
    </shoesContext.Provider>
  );
};

export default ShoesProvider;
