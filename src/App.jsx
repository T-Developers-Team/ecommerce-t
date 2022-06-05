import { useState, useEffect } from "react";
import bannerImgUrl from "./assets/banner2.jpg";
import "./App.css";

//TODO: Colocar un Logo cualquiera
//TODO: Pasar todo esto a HomeView
//TODO: Redireccion de los botones de las secciones a ProductsbyCategoryView
//TODO: Agregar mas productos
//TODO: Hacer la Página de Producto individual
//TODO: Separar los componentes de App
//TODO: Footer basico copiado de algun lado
//TODO: Probar distintos colores del header para que resalte en especial en la barra de busqueda
//TODO: 


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

const App = () => {
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
      <Header />
      <Banner imgSrc={bannerImgUrl} title="Banner XXL" subtitle="Subtitle" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum consequuntur delectus soluta vel aliquid culpa, possimus, earum excepturi illo reprehenderit, iure amet sequi ea ullam eos consectetur odio mollitia nihil."/>
      <div className="flex flex-col bg-zinc-300 p-0 m-0">
        {/*sectionedProductList.shirts.map((product, index) => (
            <ProductCard key={index} data={{ ...product }} />
          ))*/}

        {sections.map((section, index) => (
          <section id={section} key={index} className="flex flex-col min-h-screen w-full px-8 pt-28">
            <div className="flex justify-between item-center">
              <h1 className="text-xl uppercase">{section}</h1>
              <a className="px-6 py-1 rounded-md bg-green-400 text-white" href="#">See more</a>
            </div>
            <div className="flex justify-between items-center flex-wrap">
              {sectionedProductList[section].slice(0, 5).map((product, index) => (
                <ProductCard key={index} data={{ ...product }} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

const Banner = ({ imgSrc, title, subtitle, description }) => (
  <section className="relative text-white">
    <img src={imgSrc} alt="banner" className="h-96 lg:h-auto object-cover w-full object-center" />
    <div className="absolute inset-0 bg-gradient-to-l from-slate-900" />
    <div className="absolute inset-0 bg-gray-500 opacity-30" />
    <header className="absolute inset-0 flex flex-col justify-center gap-2 lg:gap-0 lg:flex-row lg:items-center p-12">
      <div className={'flex flex-col font-bold gap-2 lg:gap-4 w-full lg:w-3/6'}>
        <h1 className={'text-6xl xl:text-8xl'}>{title}</h1>
        <p className={'text-4xl xl:text-5xl'}>{subtitle}</p>
      </div>
      <p className={'w-full lg:w-4/6 font-bold hidden lg:block text-2xl xl:text-3xl'}>{description}</p>
    </header>
  </section>
);

const Header = () => (
  <header className="py-4 bg-gray-rgba backdrop-blur-sm fixed px-6 lg:px-8 z-20 w-screen">
    <div className="flex items-center uppercase font-medium text-gray-hexa">
      <section className="basis-1/3">Logo</section>
      <nav className="basis-1/3">
        <ul className="flex justify-between items-center w-96 mx-auto">
          <li>
            <a className="py-2 px-3 text-gray-700 hover:text-gray-400" href="#shirts">
              Shirts
            </a>
          </li>
          <li>
            <a className="py-2 px-3 text-gray-700 hover:text-gray-400" href="#pants">
              Pants
            </a>
          </li>
          <li>
            <a className="py-2 px-3 text-gray-700 hover:text-gray-400" href="#shoes">
              Shoes
            </a>
          </li>
        </ul>
      </nav>
      <section className="basis-1/3">
        <div className="ml-auto relative w-56">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-black"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            className="p-2 pl-10 w-full text-black bg-transparent rounded-lg border border-gray-500 text-base placeholder-gray-500"
            placeholder="Search..."
          />
        </div>
      </section>
    </div>
  </header>
);

const ProductCard = ({ data: { title, price, desc, img, categories } }) => (
  <div className="w-72 m-8 p-4 rounded overflow-hidden shadow-lg bg-gray-100 mx-auto">
    <figure className="w-full h-64">
      <img
        className="w-full h-full object-cover"
        src={img}
        alt="product"
      />
    </figure>

    <div className="flex flex-col px-1">
      <div className="my-3">
        <div className="font-bold text-lg lg:text-base truncate">{title}</div>
        <div className="font-bold text-green-600 text-2xl lg:text-xl mb-2">{`$ ${price}`}</div>
        <p className="text-gray-700 text-base lg:text-sm text-ellipsis h-11 overflow-hidden">
          {desc}
        </p>
      </div>
      <div className="pb-2">
        {categories.map((category, i) => (
          <CategoryChip key={i} title={category} />
        ))}
      </div>
    </div>
  </div>
);

const CategoryChip = ({ title }) => (
  <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
    #{title}
  </span>
);

export default App;
