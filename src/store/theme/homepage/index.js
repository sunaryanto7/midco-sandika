import { useContext } from 'react';
import { AppContext } from '@vendor/environment/context/app';
import Layout from '@vendor/components/core/Layout';

const Homepage = (props) => {
  const { page: { home: { layout } } } = useContext(AppContext);

  return (
    <Layout {...layout}>
      hai
    </Layout>
  );
};

export default Homepage;