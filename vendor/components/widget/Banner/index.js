import {memo} from 'react';
import classNames from 'classnames';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Banner = ({ images = [], config , className}) => {
  return (
    <Swiper {...config} className={classNames(className)}>
      {images.map((data, i) => 
        <SwiperSlide className={'swipper_item'} key={i}>
          <div className={'swipper_images'}>
            <picture>
              <source media="(min-width:650px)" srcSet={data.desktop}/>
              <source media="(max-width:650px)" srcSet={data.mobile}/>
              <img src={data.mobile} alt={data.alt}/>
            </picture>
          </div>
        </SwiperSlide>)}
    </Swiper>
  );
};

export default memo(Banner);
