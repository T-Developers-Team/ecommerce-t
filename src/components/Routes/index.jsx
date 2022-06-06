import { useRoutes } from "react-router-dom";
import HomeView from "../../views/Home";
import { LayoutView } from "../../views/Layout";
import ProductView from "../../views/Product";
import ProductsByCategoryView from "../../views/ProductsByCategory";

const RoutesComponent = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <LayoutView />,
      children: [
        {
          index: true,
          element: <HomeView />,
        },
        {
          path: "product/:id",
          element: <ProductView />,
        },
        {
          path: "category/:category",
          element: <ProductsByCategoryView />,
        },
      ],
    },
  ]);

  return element;
};

export default RoutesComponent;
