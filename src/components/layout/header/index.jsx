import { SearchIcon } from "@heroicons/react/solid";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";

const HeaderComponent = () => {
  const navigate = useNavigate()

  const toHome = () => {
    navigate('/')
  }

  return (
    <header className="py-4 bg-gray-rgba backdrop-blur-sm fixed px-6 lg:px-8 z-20 w-screen">
      <div className="flex items-center uppercase font-medium text-gray-hexa gap-2">
        <figure className="basis-1/2 lg:basis-1/3">
            <img className="max-h-[30px] cursor-pointer" src={logo} onClick={toHome}/>
        </figure>
        <nav className="basis-1/2 lg:basis-1/3">
          <ul className="flex justify-between items-center mx-auto">
            <li>
              <Link
                to={"category/shirts"}
                class="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4  border-slate-700 text-slate-900"
              >
                <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-slate-900 rounded-t-lg group-hover:w-full group-hover:h-10 opacity-10"></span>
                <span class="relative">Shirts</span>
              </Link>
            </li>
            <li>
              <Link
                to={"category/pants"}
                class="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4  border-slate-700 text-slate-900"
              >
                <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-slate-900 rounded-t-lg group-hover:w-full group-hover:h-10 opacity-10"></span>
                <span class="relative">Pants</span>
              </Link>
            </li>
            <li>
              <Link
                to={"category/shoes"}
                class="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4  border-slate-700 text-slate-900"
              >
                <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-slate-900 rounded-t-lg group-hover:w-full group-hover:h-10 opacity-10"></span>
                <span class="relative">Shoes</span>
              </Link>
            </li>
          </ul>
        </nav>
        <section className="basis-1/3 hidden lg:block">
          <div className="ml-auto relative w-56 border-b-4 border-l-2 border-slate-700 shadow-lg rounded">
            <div className="flex absolute inset-y-0 left-0 items-center pl-2 pointer-events-none">
              <SearchIcon className="w-5 h-5 text-black" />
            </div>
            <input
              type="text"
              className="p-2 pl-9 w-full text-black bg-transparent rounded-t-lg text-base placeholder-slate-900"
              placeholder="Search..."
            />
          </div>
        </section>
      </div>
    </header>
  );
};

export default HeaderComponent;
