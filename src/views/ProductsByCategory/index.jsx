import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ProductCard } from "../../components";

const ProductsByCategoryView = () => {
  const [productData, setProductData] = useState([]);
  const location = useLocation();
  const { category } = useParams()

  useEffect(() => {
    const getProductsByCategory = async ( category ) => {
      const PRODUCTS_URL = `http://localhost:5000/api/products?category=${category}`;

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
      const data = await response.json();
      console.log(data);
      setProductData(data);
    };

    if (location.state?.products) {
      const { products } = location.state;
      setProductData(products)

      console.log("This are the products sectioned", products);
    } else {
      getProductsByCategory(category)
    }
    console.log('WENAS')
  }, [])

  return (
    <div className="grid grid-cols-7">
      <div className="bg-red-300 col-span-2"></div>
      <div className="bg-green-300 col-span-5 flex justify-around flex-wrap">
        {productData.map((product, index) => (
          <ProductCard key={index} data={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsByCategoryView;
