import classNames from 'classnames';

const Quickcart = ({ className }) => {
  return (
    <>
      <div className={classNames('quickcart', className)}>
        <img src={"/media/icons/supermarket.svg"} alt="" className={'shop_icon'} />
      </div>
    </>
  );
};

export default Quickcart;
