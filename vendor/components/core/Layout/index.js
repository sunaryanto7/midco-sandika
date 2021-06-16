import PropTypes from 'prop-types';
import classNames from 'classnames';
import Footer from '@vendor/components/core/Footer';
import Header from '@vendor/components/core/Header';
// import Navigation from '@app/components/core/Navigation';
import Newsletter from '@vendor/components/widget/Newsletter';
import Copyright from '@vendor/components/core/Copyright';

const Layout = ({ header, navigation, footer, children, nomargin, newsletter, className }) => {

  return (
    <>
      <div className={classNames("wrapper", className)}>
        {header.enable && <Header {...header.props} />}
        <div className={"main"} id={'main'}>{children}</div>
        {newsletter.enable && <Newsletter />}
        {footer.enable && <Footer />}
        {/* {navigation.enable && <Navigation {...navigation.props} />}*/}
        <Copyright />
      </div>
    </>
  );
};

Layout.defaultProps = {
  children: [],
  header: [],
  navigation: [],
  nomargin: false
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  header: PropTypes.object,
  navigation: PropTypes.object,
  nomargin: PropTypes.bool
};

export default Layout;
