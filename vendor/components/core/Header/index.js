import PropTypes from 'prop-types';
import Router from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Quickcart from '@vendor/components/core/Quickcart';
import Button from '@vendor/components/commons/Button';
import GlobalNotification from '@vendor/components/core/GlobalNotification';

const Header = (props) => {
  const { withAppName, withMinicart, withNavigation, withSearch } = props;

  return (
    <>
      <div className={"header"}>
        <div className={"header_panel"}>
          <GlobalNotification />
        </div>

        <div className={"header_content"}>
          {/* Back Navigation */}
          {withNavigation && (
            <div className={"history_back"}>
              <Button
                btnTransparent
                onClick={() => {
                  Router.back();
                }}>
                <FontAwesomeIcon icon="arrow-left" />
              </Button>
            </div>
          )}

          {/* App Name */}
          {withAppName && (
            <div className={"app_name"}>
              <img
                src={'/media/store/logotext.svg'}
                onClick={() => {
                  Router.push('/');
                }}
              />
            </div>
          )}

          {/* Minicart */}
          {withMinicart && <Quickcart className={"minicart"} />}
        </div>
      </div>
    </>
  );
};

Header.defaultProps = {
  headerTitle: '',
  withAppName: false,
  withMinicart: false,
  withNavigation: false,
  withSearch: false
};

Header.propTypes = {
  headerTitle: PropTypes.string,
  withAppName: PropTypes.bool,
  withMinicart: PropTypes.bool,
  withNavigation: PropTypes.bool,
  withSearch: PropTypes.bool
};

export default Header;
