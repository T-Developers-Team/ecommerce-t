import { useState, useEffect } from "react";
import { Banner, ProductCard } from "../../components";
import { API_URL } from "../../utils/constants";

import pibaImgUrl from "../../assets/piba.jpg"
import pibeImgUrl from "../../assets/pibe.png"

const HomeView = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const PRODUCTS_URL = `${API_URL}/products/`;

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
      setProducts(productsData)
    };

    getProducts();
  }, []);

  return (
    <>
      <Banner
        imgSrc={'banner'}
        title="Banner XXL"
        subtitle="Subtitle"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum consequuntur delectus soluta vel aliquid culpa, possimus, earum excepturi illo reprehenderit, iure amet sequi ea ullam eos consectetur odio mollitia nihil."
      />
      <section className="flex flex-col items-center justify-center py-12">
        <h3 className="text-3xl uppercase font-semibold">featured products</h3>
        <div className="flex flex-wrap justify-center items-center">
          {products.slice(0, 4).map((product, index) => <ProductCard key={index} data={product}/>)}
        </div>
      </section>

      <div className="flex flex-col p-0 m-0 gap-10">
        <section className="flex flex-col xl:flex-row">
          <figure className="bg-blue-400 xl:w-2/3 overflow-hidden mb-8 xl:mb-0">
            <img className="xl:float-right h-full xl:min-w-[1038px]" src={pibaImgUrl}/>
          </figure>
          <div className="xl:w-1/3 flex flex-col justify-center items-center">
            <span className="bg-pink-500 text-white text-xl rounded-sm px-2 py-0.5">
              THE BEST FOR WOMEN
            </span>
            {products.length > 0 && <ProductCard data={products[1]}/>}
          </div>
        </section>
        <section className="flex flex-col xl:flex-row">
          <figure className="bg-blue-400 xl:w-2/3 xl:order-last overflow-hidden mb-8 xl:mb-0">
            <img className="xl:float-left h-full xl:min-w-[1038px]" src={pibeImgUrl}/>
          </figure>
          <div className="xl:w-1/3 flex flex-col justify-center items-center">
            <span className="bg-blue-800 text-white text-xl rounded-sm px-2 py-0.5">
              THE BEST FOR MEN
            </span>
            {products.length > 0 && <ProductCard data={products[2]}/>}
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeView;
