import { CategoryChip } from "..";

const ProductCardComponent = ({ data: { title, price, desc, img, categories } }) => (
  <div className="w-72 m-8 p-4 rounded overflow-hidden shadow-lg bg-gray-100 mx-auto">
    <figure className="w-full h-64">
      <img className="w-full h-full object-cover" src={img} alt="product" />
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

export default ProductCardComponent
