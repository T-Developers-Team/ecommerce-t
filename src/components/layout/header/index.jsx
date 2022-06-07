import { Link } from "react-router-dom";

const HeaderComponent = () => {

  return (
  <header className="py-4 bg-gray-rgba backdrop-blur-sm fixed px-6 lg:px-8 z-20 w-screen">
    <div className="flex items-center uppercase font-medium text-gray-hexa">
      <section className="basis-1/3">Logo</section>
      <nav className="basis-1/3">
        <ul className="flex justify-between items-center w-96 mx-auto">
          <li>
            <Link className="py-2 px-3 text-gray-700 hover:text-gray-400" to="category/shirts">
              Shirts
            </Link>
          </li>
          <li>
            <Link className="py-2 px-3 text-gray-700 hover:text-gray-400" to={'/category/pants'}
            >
              Pants
            </Link>
          </li>
          <li>
            <Link className="py-2 px-3 text-gray-700 hover:text-gray-400" to={'/category/shoes'}
            >
              Shoes
            </Link>
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
)};

export default HeaderComponent
