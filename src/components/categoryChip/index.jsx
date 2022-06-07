const CategoryChipComponent = ({ title, size = 'xs' }) => (
  <span className={`inline-block bg-blue-500 rounded-full
    px-2 py-1 font-semibold text-white mr-2 mb-2 text-${size} capitalize tracking-wider`}>
    #{title}
  </span>
);

export default CategoryChipComponent
