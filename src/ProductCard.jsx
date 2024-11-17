import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="border-2 rounded-lg p-4 bg-white">
      <div className="flex justify-center">
        <img
          src={product.product_image}
          alt={product.product_title}
          className="h-2/6 rounded-lg"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-bold">{product.product_title}</h2>
        <p className="text-sm text-gray-500">{product.category}</p>
        <p className="text-xl font-semibold">Price: ${product.price}</p>
        <Link to={`/product/${product.product_id}`}>
          <button className="bg-white rounded-lg border-2 border-[#9538E2] p-2 text-[#9538E2]">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    product_id: PropTypes.string.isRequired,
    product_image: PropTypes.string.isRequired,
    product_title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
