import PropTypes from 'prop-types';
import classNames from 'classnames';
import ProductItem from '@vendor/components/core/ProductItem';

const CatalogProduct = ({ productData = [], className }) => {
  return (
    <div className={classNames("widget_catalog", className)}>
      {productData.map((item, i) => <ProductItem data={item} key={i}/> )}
    </div>
  );
};

CatalogProduct.propTypes = {
  productData: PropTypes.array
};

export default CatalogProduct;
