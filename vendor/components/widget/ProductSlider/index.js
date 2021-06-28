import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames';
import ProductItem from '@vendor/components/core/ProductItem';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const ProductSlider = ({ productData, config, className }) => {

  return (
    <div className={'product-slider'}>
      <div className={'product-slider--title'}>
        <h2>Promo</h2>
      </div>
      <div className={'product-slider--content'}>
        <Swiper {...config} className={classNames('swiper_product', className)}>
          {productData.map((item, i) =>
            <SwiperSlide className={'swiper_product--item'} key={i}>
              <ProductItem data={item} key={i} />
            </SwiperSlide>
          )}
        </Swiper>
      </div>
      <div className={'product-slider--action'}>
        <a href='#' className={'btn btn_primary'}>Lihat Semua</a>
      </div>
    </div>
  );
};

export default ProductSlider;
