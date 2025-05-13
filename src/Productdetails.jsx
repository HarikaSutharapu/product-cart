import React, { useEffect, useState } from "react";
import { FaStar,FaStarHalfAlt  } from "react-icons/fa";

function Productdetails({id}) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function getDetails() {
      let response = await fetch("https://fakestoreapi.com/products/"+id);
      let data = await response.json();
      setProduct(data);
    }
    getDetails();
  }, []);
  return (
    <>
    <div className="grid justify-center">
      <div className="flex items-center w-full p-10 gap-20 m-5 shadow-2xl">
        <div><img className="w-80 h-80" src={product.image} alt="" /></div>
        <div>
          <div className="text-4xl w-200">{product.title}</div>

          <div className="text-2xl gap-5 w-200 pb-3">{product.description}</div>

          <div className="text-2xl flex">{product?.rating?.rate} <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt  /></div>

          <div className="text-4xl pt-5 pb-3 gap-3">{product.price}</div>
          <div>
            <button className=" text-2xl rounded-full m-2 h-10 bg-blue-600 w-40 gap-6">Buy Now</button>
          <button className=" text-2xl rounded-full m-2 h-10 bg-amber-600 w-40 gap-6">
            Add to cart
          </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Productdetails;
