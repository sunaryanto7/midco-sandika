import { useContext } from 'react';
import Head from 'next/head'
import { AppContext } from '@vendor/environment/context/app';
import Block from '@vendor/components/core/Block';
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
        <Block>
          <Banner config={imageSlider} images={bannerImages} />
        </Block>
        <Block>
          <ProductSlider config={productSlider} productData={products} />
        </Block>
        <Block>
          <FeaturedProducts images={featuredImages} />
        </Block>
      </Layout>
    </>
  );
};

export default Homepage;