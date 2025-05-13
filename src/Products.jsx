import React, { useEffect, useState } from 'react'
import Productdetails from './Productdetails';

export default function Products() {
const [ProductsList,setProducts]=useState([]);

useEffect(()=>{
  async function fetchData() {
  let response=await fetch('https://fakestoreapi.com/products');
  let data= await response.json();
  setProducts(data);
  }
  fetchData();
  },[]);

  return (
    <>
    <div className="grid w-full gap-10 m-8" >
      {
       ProductsList.map((p)=>{
        //return <ProductCart price={p.price} description={p.description} name={p.title} image={p.image}/>
        return <Productdetails id={p.id}/>
       })

        }
      
    </div>
    </>
  )
}
