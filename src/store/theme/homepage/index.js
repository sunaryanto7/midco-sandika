import { useContext } from 'react';
import Head from 'next/head'
import { AppContext } from '@vendor/environment/context/app';
import Layout from '@vendor/components/core/Layout';
import Banner from '@vendor/components/widget/Banner';
import CatalogProduct from '@vendor/components/widget/CatalogProduct';
import ProductSlider from '@vendor/components/widget/ProductSlider';

const Homepage = ({banner, products}) => {
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
        <CatalogProduct productData={products}/>
      </Layout>
    </>
  );
};

export default Homepage;