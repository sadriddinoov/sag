import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  price?: number;
  originalPrice?: number | null;
  collectionType: string | number;
}

const ProductCard = ({
  id,
  name,
  image,
  collectionType,
}: ProductCardProps) => {
  const { t } = useLanguage();

  const isOnSale = collectionType === 3 || collectionType === "Sale";

  return (
    <Link to={`/product/${id}`} state={{ from: 'sales' }} className="group">
      <div className="shadow-md border-gray-200 overflow-hidden transition-shadow hover:shadow-md">
        <div className="relative h-[200px] sm:h-[360px] md:h-[430px] bg-gray-100">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
          />

          {isOnSale && (
            <div className="absolute top-0 right-0 w-[60px] h-[60px]">
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[100px] border-t-[#FFFCE0] border-l-[100px] border-l-transparent z-10" />
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[100px] border-t-red-500 border-l-[100px] border-l-transparent z-20 rotate-180" />
              <span className="absolute top-[70px] right-[37px] text-white text-[13px] font-bold z-30">
                {t('badge.sale')}
              </span>
            </div>
          )}
        </div>

        <div className="p-4 shadow-sm">
          <h3 className="font-medium text-gray-800 mb-2 group-hover:text-gray-500 transition-colors">
            {name}
          </h3>
          {/* <div className="text-sm text-gray-600">
            {price && <span>{price.toLocaleString()} UZS</span>}
            {originalPrice && (
              <span className="line-through text-gray-400 ml-2">
                {originalPrice.toLocaleString()} UZS
              </span>
            )}
          </div> */}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
