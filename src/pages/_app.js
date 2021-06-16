import '@styles/app.scss';
import App from 'next/app'
import AppContextProvider from '@vendor/environment/context/app';
import view from '@vendor/sample/config/view.json';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart, faBars, faArrowLeft, faFilter } from '@fortawesome/free-solid-svg-icons';
library.add(faShoppingCart, faBars, faArrowLeft, faFilter);

const Sandika = ({ Component, pageProps, storeConfig, hostname }) => {
  return (
    <AppContextProvider value={{ ...storeConfig }}>
      <Component {...pageProps} />
    </AppContextProvider>
  );
};

Sandika.getInitialProps = async (appContext) => {
  const { ctx } = appContext;
  let hostname = ctx.req ? ctx.req.headers.host : location.hostname;

  const appProps = await App.getInitialProps(appContext);
  appProps.storeConfig = view;
  appProps.hostname = hostname;

  return { ...appProps };
};

export default Sandika;
