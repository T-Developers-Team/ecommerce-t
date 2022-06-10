import { ShoppingBagIcon } from "@heroicons/react/solid";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { CategoryChip } from "../../components";
import { API_URL } from "../../utils/constants";

const ProductView = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState();

  useEffect(() => {
    const getProducts = async () => {
      const PRODUCTS_URL = `${API_URL}/products/find/${id}`;

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

      setProductData(data);
    };

    getProducts();
  }, [id]);

  return (
    <div className="flex flex-col gap-6 mb-12 mx-10 lg:mx-20 lg:mb-10 pt-24 lg:flex-row">
      <div className="lg:w-8/12 bg-blue-300">
        <figure className="flex flex-col items-center bg-slate-800 lg:min-h-[500px]">
          <div className="bg-zinc-100 w-3/5 lg:w-3/5 my-auto">
            <img
              src={productData?.img}
              className="mx-auto"
              alt="Product Image"
            />
          </div>
        </figure>
      </div>

      <div className="flex flex-col lg:w-4/12">
        <div className="mb-2">
          {productData?.categories.map((categorie, index) => (
            <CategoryChip key={index} title={categorie} size="xs" />
          ))}
        </div>
        <div className="text-2xl mb-6 font-bold uppercase">
          {productData?.title}
        </div>
        <div className="text-base mb-4">{productData?.desc}</div>
        <div className="flex flex-col items-start mb-4">
          <span className="bg-red-600 text-white rounded-sm px-2 py-0.5">
            POPULAR
          </span>
        </div>
        <div className="text-2xl font-bold text-green-600 mb-4">
          $ {productData?.price}
        </div>

        <div className="text-base mb-4">
          Color:{' '}
          <span className="uppercase font-semibold">{productData?.color}</span>
        </div>

        <div className="text-base">
          Talla:
        </div>

        <ul class="grid grid-cols-4 gap-3 mt-2 text-slate-800">
          <li>
            <button type="button" class="w-full text-base font-semibold leading-snug tracking-wider border border-slate-800 px-3.5 py-2 hover:bg-slate-800 hover:text-white">
              XS
            </button>
          </li>
          <li>
            <button type="button" class="w-full text-base font-semibold leading-snug tracking-wider border border-slate-800 px-3.5 py-2 hover:bg-slate-800 hover:text-white">
              S
            </button>
          </li>
          <li>
            <button type="button" class="w-full text-base font-semibold leading-snug tracking-wider border border-slate-800 px-3.5 py-2 hover:bg-slate-800 hover:text-white">
              M
            </button>
          </li>
          <li>
            <button type="button" class="w-full text-base font-semibold leading-snug tracking-wider border border-slate-800 px-3.5 py-2 hover:bg-slate-800 hover:text-white">
              L
            </button>
          </li>
          <li>
            <button type="button" class="w-full text-base font-semibold leading-snug tracking-wider border border-slate-800 px-3.5 py-2 hover:bg-slate-800 hover:text-white">
              XL
            </button>
          </li>
          <li>
            <button type="button" class="w-full text-base font-semibold leading-snug tracking-wider border border-slate-800 px-3.5 py-2 hover:bg-slate-800 hover:text-white">
              2XL
            </button>
          </li>
          <li>
            <button type="button" class="w-full text-base font-semibold leading-snug tracking-wider border border-slate-800 px-3.5 py-2 hover:bg-slate-800 hover:text-white">
              3XL
            </button>
          </li>
        </ul>

        <button
          type="button"
          className="justify-self-end self-end w-full mt-6 bg-gray-300 rounded cursor-not-allowed text-gray-500"
          disabled
        >
          <div className="flex items-center flex-row gap-3 justify-center py-3">
            <ShoppingBagIcon width={"1em"} height={"1em"} className="w-6 h-6" />
            <div className="text-base font-semibold leading-snug tracking-wider">
              Add to Cart
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ProductView;
