import classNames from 'classnames';

const Copyright = ({ className }) => {
  return (
    <>
      <div className={classNames("copyright", className)}>
        <p>Copyright © Sandika</p>
      </div>
    </>
  );
};

export default Copyright;
