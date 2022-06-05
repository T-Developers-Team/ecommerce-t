import "./App.css";
import { Routes, Header, Footer } from "./components";

//TODO: Colocar un Logo cualquiera
//TODO: Pasar todo esto a HomeView
//TODO: Redireccion de los botones de las secciones a ProductsbyCategoryView
//TODO: Agregar mas productos
//TODO: Hacer la Página de Producto individual
//TODO: Separar los componentes de App
//TODO: Footer basico copiado de algun lado
//TODO: Probar distintos colores del header para que resalte en especial en la barra de busqueda

const App = () => {
  return (
    <div className="">
      <Header />
      <main className="">
        <Routes />
      </main>
      <Footer />
    </div>
  );
};

export default App;
