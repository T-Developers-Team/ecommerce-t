import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Banner, ProductCard } from "../../components";
import { API_URL } from "../../utils/constants";

const ProductsByCategoryView = () => {
  const location = useLocation();
  const { category } = useParams();

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const getProductsByCategory = async (category) => {
      const PRODUCTS_URL = `${API_URL}/products?category=${category}`;

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
      setProductData(products);

      console.log("This are the products sectioned", products);
    } else {
      getProductsByCategory(category);
    }
  }, [category]);

  return (
    <>
      <Banner imgSrc={category} title={category.toUpperCase()} />
      <div className="grid grid-cols-8">
        {/* Filter Section */}
        <div className="col-span-2 py-8 px-12">
          <h1 className="text-3xl font-semibold mb-8">Filtrar por:</h1>
          <div className="mb-6">
            <div className="ml-8">
              <h3 className="text-xl mb-4">Color</h3>
              <div className="flex flex-col justify-center w-full">
                <div className="flex items-center mb-2">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm font-medium "
                  >
                    Black
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="checked-checkbox"
                    className="ml-2 text-sm font-medium "
                  >
                    White
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="checked-checkbox"
                    className="ml-2 text-sm font-medium "
                  >
                    Red
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6 pt-6 border-t-2">
            <div className="ml-8">
              <h3 className="text-xl mb-4">Material</h3>
              <div className="flex flex-col justify-center w-full">
                <div className="flex items-center mb-2">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm font-medium "
                  >
                    Cotton
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="checked-checkbox"
                    className="ml-2 text-sm font-medium "
                  >
                    Silk
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="checked-checkbox"
                    className="ml-2 text-sm font-medium "
                  >
                    Leather
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6 pt-6 border-t-2">
            <div className="ml-8">
              <h3 className="text-xl mb-4">Size</h3>
              <div className="flex flex-col justify-center w-full">
                <div className="flex items-center mb-2">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm font-medium "
                  >
                    SM
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="checked-checkbox"
                    className="ml-2 text-sm font-medium "
                  >
                    MD
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="checked-checkbox"
                    className="ml-2 text-sm font-medium "
                  >
                    XL
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prodcut List */}
        <div className="col-span-6 flex justify-around flex-wrap">
          {productData.map((product, index) => (
            <ProductCard key={index} data={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsByCategoryView;
