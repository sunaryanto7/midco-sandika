import { useContext } from 'react';
import Head from 'next/head'
import { AppContext } from '@vendor/environment/context/app';
import Layout from '@vendor/components/core/Layout';
import Banner from '@vendor/components/widget/Banner';
import ProductSlider from '@vendor/components/widget/ProductSlider';
import FeaturedProducts from '@vendor/components/commerce/homepage/FeaturedProducts';

const Homepage = ({ bannerImages, featuredImages, products }) => {
  const {
    slider: { options: { imageSlider, productSlider } },
    page: { home: { layout } }
  } = useContext(AppContext);

  return (
    <>
      <Head>
        <title>Midco Sandika</title>
      </Head>
      <Layout {...layout}>
        <Banner config={imageSlider} images={bannerImages} />
        <ProductSlider config={productSlider} productData={products} />
        <FeaturedProducts images={featuredImages} />
      </Layout>
    </>
  );
};

export default Homepage;