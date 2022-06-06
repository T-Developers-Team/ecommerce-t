import { useLocation } from "react-router-dom";
import { ProductCard } from "../../components";

const ProductsByCategoryView = () => {
  const location = useLocation();
  const { products } = location.state;

  console.log("This are the products sectioned", products);
  return (
    <div className="grid grid-cols-7">
      <div className="bg-red-300 col-span-2"></div>
      <div className="bg-green-300 col-span-5 flex justify-around flex-wrap">
        {products.map((product, index) => (
          <ProductCard key={index} data={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsByCategoryView;
