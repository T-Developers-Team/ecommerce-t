import { useState, useEffect } from "react";
import bannerImgUrl from "../../assets/banner2.jpg";

import { Banner, ProductCard } from "../../components";
import { Link } from "react-router-dom";

const sections = ["shoes", "pants", "shirts"];
const secProInitial = {
  shirts: [],
  pants: [],
  shoes: [],
};
const sectioningProducts = (productList) => {
  const sectionedProducts = {
    shirts: [],
    pants: [],
    shoes: [],
  };

  productList.map((product) => {
    sections.map((section) => {
      if (product.categories.includes(section))
        sectionedProducts[section].push(product);
    });
  });

  return sectionedProducts;
};
const HomeView = () => {
  const [sectionedProductList, setSectionedProductList] =
    useState(secProInitial);

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

      const sectionedProducts = sectioningProducts(productsData);
      console.log(sectionedProducts);
      setSectionedProductList(sectionedProducts);
    };

    getProducts();
  }, []);

  return (
    <>
      <Banner
        imgSrc={bannerImgUrl}
        title="Banner XXL"
        subtitle="Subtitle"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum consequuntur delectus soluta vel aliquid culpa, possimus, earum excepturi illo reprehenderit, iure amet sequi ea ullam eos consectetur odio mollitia nihil."
      />
      <div className="flex flex-col bg-zinc-300 p-0 m-0">
        {sections.map((section, index) => (
          <section
            id={section}
            key={index}
            className="flex flex-col min-h-screen w-full px-8 pt-28"
          >
            <div className="flex justify-between item-center">
              <h1 className="text-xl uppercase">{section}</h1>
              <Link
                className="px-6 py-1 rounded-md bg-green-400 text-white"
                to={`category/${section}`}
                state={{ products: sectionedProductList[section] }}
              >
                See more
              </Link>
            </div>
            <div className="flex justify-between items-center flex-wrap">
              {sectionedProductList[section]
                .slice(0, 5)
                .map((product, index) => (
                  <ProductCard key={index} data={{ ...product }} />
                ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default HomeView;
