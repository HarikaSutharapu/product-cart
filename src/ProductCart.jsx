import React from "react";

function ProductCart({ name, description, price, image }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 shadow-2xl border-black">
      <img  className="h-50 w-50 " src={image} alt="" />
      <h1 className="text-xl text-red-500">{name}</h1>
      <p className="text-xs">{description}</p>
      <p>{price}</p>
      <button className="border-1 rounded-full bg-amber-700 w-30">Add to cart</button>
    </div>
  );
}

export default ProductCart;
