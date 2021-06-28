import { useContext } from 'react';
import Head from 'next/head'
import { AppContext } from '@vendor/environment/context/app';
import Layout from '@vendor/components/core/Layout';
import Banner from '@vendor/components/widget/Banner';
import CatalogProduct from '@vendor/components/widget/CatalogProduct';
import ProductSlider from '@vendor/components/widget/ProductSlider';
import FeaturedProducts from '@vendor/components/pages/homepage/FeaturedProducts'

const Homepage = ({banner, products, featuredImages}) => {
  const { 
    slider:{ options:{ imageSlider, productSlider }},
    page:{ home:{ layout }} 
  } = useContext(AppContext);

  return (
    <>
      <Head>
        <title>Midco Sandika</title>
      </Head>
      <Layout {...layout}>
        <Banner config={imageSlider} images={banner}/>
        <ProductSlider config={productSlider} productData={products}/>
        <FeaturedProducts images={featuredImages}/>
      </Layout>
    </>
  );
};

export default Homepage;