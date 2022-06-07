import { CategoryChip } from "..";
import {Link} from 'react-router-dom'

const ProductCardComponent = ({
  data: { _id, title, price, desc, img, categories },
}) => (
  <div className="w-72 m-8 p-4 rounded overflow-hidden shadow-lg bg-gray-200 mx-4">
    <figure className="w-full h-64">
      <img className="w-full h-full object-cover" src={img} alt="product" />
    </figure>

    <div className="flex flex-col px-1">
      <div className="flex justify-between items-center my-3">
        <div className="overflow-auto">
          <div className="font-bold text-lg lg:text-base truncate">{title}</div>
          <div className="font-bold text-green-600 text-2xl lg:text-xl">{`$ ${price}`}</div>
        </div>
          <Link to={`/product/${_id}`} className="bg-green-500 text-white px-4 py-2 text-xs font-semibold rounded">Detail</Link>
      </div>
      <p className="text-gray-700 mb-4 text-base lg:text-sm text-ellipsis h-11 overflow-hidden">
        {desc}
      </p>
      <div className="justify-self-end">
        {categories.map((category, i) => (
          <CategoryChip key={i} title={category} />
        ))}
      </div>
    </div>
  </div>
);

export default ProductCardComponent;
