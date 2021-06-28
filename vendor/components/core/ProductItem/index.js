import PropTypes from 'prop-types';
import classNames from 'classnames';

const ProductItem = ({ data, className }) => {

  const productNameSplit = () => {
    if (data.title && data.title.split(' ').length > 4) { return data.title.split(' ').splice(0, 7).join(' ') + '...'; }
    return data.title;
  };

  var trimedProductName = productNameSplit();

  return (
    <div className={classNames("product_item", className)}>
      <div className={"product_image"}>
        <img src={`https://thumbor.sirclocdn.com/unsafe/240x300/filters:format(webp)/${data.image}`} alt={"alt"} />
      </div>
      <div className={"product_description"}>
        <span>
          <span className={"product_discount"}>{'10%'}</span>
          <span className={"product_brand"}>{data.category}</span>
        </span>
        <p className={"product_name"}>{trimedProductName}</p>
        <span className={"product_price"}>{`Rp, ${data.price}`}</span>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  productName: PropTypes.string,
  productBrand: PropTypes.array,
  productOldPrice: PropTypes.number,
  productFinalPrice: PropTypes.number,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
};

export default ProductItem;
