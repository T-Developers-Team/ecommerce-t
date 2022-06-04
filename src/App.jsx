import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const PRODUCTS_URL = "http://localhost:5000/api/products/";

      const PRODUCTS_REQUEST_PARAMS = {
        metho: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT,DELETE",
        },
      };

      const response = await fetch(PRODUCTS_URL, PRODUCTS_REQUEST_PARAMS);
      const productsData = await response.json();
      console.log(productsData)
      
      setProductList(productsData)
    };
    
    getProducts()
  }, []);

  return (
    <div className="bg-zinc-400 p-3">
      <section className="grid grid-cols-3 gap-3">
        {productList.map((product, index) => <ProductCard key={index} data={{...product}}/>)}
      </section>
    </div>
  );
};

const ProductCard = ({
  data: {title, price, desc, img, categories}
}) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100">
    <figure className="w-full h-64 bg-gray-100">
      <img className="w-full h-full object-cover" src={img} alt="Sunset in the mountains" />
    </figure>
    <div className="px-6 py-3">
      <div className="font-bold text-base mb-2 flex">
        <span className="flex-auto text-left">{title}</span>
        <span className="flex-none w-20 text-right text-green-600">{`$ ${price}`}</span>
      </div>
      <p className="text-gray-700 text-sm">
        {desc}
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      {categories.map((category, i) => 
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={i}>#{category}</span>
      )}
    </div>
  </div>
);

export default App;
