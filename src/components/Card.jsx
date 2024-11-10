


import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { shoesContext } from "../context/ShoesProvider";
import { formatNumber } from "./formatNumber";

const Card = () => {
  
  const { shoes, addToCart } = useContext(shoesContext);

  const navigate = useNavigate();

  return (
    <>
      {shoes.map((shoes) => (
        <div
          key={shoes.id}
          className="col"
        >
          <div className="card">
            <img
              className="card-img-top"
              src={shoes.img}
              alt=""
            />
            <div className="card-body">
              <h4 className="card-title text-capitalize">{shoes.name}</h4>
              <hr />
            </div>
            <h2 className="text-center text-dark pb-3">
              Precio: ${formatNumber(shoes.price)}
            </h2>
            <div className="d-flex justify-content-around mb-4">
              <button
                to={`shoes/${shoes.id}`}
                className="btn btn-info text-white"
                onClick={() => navigate(`/shoes/${shoes.id}`)}
              >
                Ver Más &#128064;
              </button>

              <button
                className="btn btn-danger"
                onClick={() => addToCart(shoes)}
              >
                Añadir &#128722;
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;








// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { shoesContext } from "../context/PizzaProvider";
// import { formatNumber } from "./formatNumber";

// const Card = () => {
  
//   const { shoes, addToCart } = useContext(shoesContext);

//   const navigate = useNavigate();

//   return (
//     <>
//       {shoes.map((shoes) => (
//         <div
//           key={shoes.id}
//           className="col"
//         >
//           <div className="card">
//             <img
//               className="card-img-top"
//               src={shoes.img}
//               alt=""
//             />
//             <div className="card-body">
//               <h4 className="card-title text-capitalize">{shoes.name}</h4>
//               <hr />
//               <p className="card-text">
//                 <b>Ingredientes:</b>
//               </p>

//             </div>

//             <h2 className="text-center text-dark pb-3">
//               Precio: ${formatNumber(shoes.price)}
//             </h2>

//             <div className="d-flex justify-content-around mb-4">
//               <button
//                 to={`shoes/${shoes.id}`}
//                 className="btn btn-info text-white"
//                 onClick={() => navigate(`/shoes/${shoes.id}`)}
//               >
//                 Ver Más &#128064;
//               </button>

//               <button
//                 className="btn btn-danger"
//                 onClick={() => addToCart(shoes)}
                
//               >
//                 Añadir &#128722;
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default Card;