import PropTypes from 'prop-types';
import classNames from "classnames";
import Button from '@vendor/components/commons/Button';

const Block = ({ children, title, additional, className, nopadding }) => {

  return (
    <>
      <div className={classNames('widget', className, nopadding && 'widget_nopadding')}>
        {title && (
          <div className={"widget_header"}>
            <h4 className={"widget_title"}>{title}</h4>
            {additional && (
              <h5 className={"widget_link"}>
                <Button btnTransparent>{additional}</Button>
              </h5>
            )}
          </div>
        )}
        <div className={"widget_content"}>{children}</div>
      </div>
    </>
  );
};

Block.defaultProps = {
  children: [],
  title: null,
  additional: null,
  padding15: false
};

Block.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  title: PropTypes.string,
  additional: PropTypes.string,
  padding15: PropTypes.bool
};

export default Block;
