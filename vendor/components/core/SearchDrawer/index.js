import { useContext } from 'react';
import { PageContext } from '@sandika_environment/context/page';

import Drawer from '@vendor/components/commons/Drawer';
import Button from '@vendor/components/commons/Button';
import { InputField } from '@vendor/components/commons/Utilities';
import Block from '@vendor/components/core/Block';
import ArrowBackIcon from '@public/media/icons/back.svg';
import classNames from 'classnames';

const SearchDrawer = ({ open, handleClose, className }) => {
  const { popularSearch } = useContext(PageContext)

  const handleChange = (value) => {
    console.log(value);
  };

  return (
    <>
      <Drawer blank isOpen={open} className={classNames('searchdrawer', className)}>
        <div className={'searchdrawer_header'}>
          <div className={'searchdrawer_header--content'}>
            {/* Back Button */}
            <div className={'searchdrawer_navigation'}>
              <Button btnWhite onClick={handleClose}>
                <ArrowBackIcon className={'close_icon'} />
              </Button>
            </div>

            {/* Search Form */}
            <div className={drawer_search_form}>
              <form>
                <InputField
                  type={'text'}
                  placeholder={'Cari Produk Yang Kamu Sukai'}
                  id={'search'}
                  name={'search'}
                  onChange={handleChange}
                />
              </form>
            </div>
          </div>
        </div>

        {/* Search Result */}
        <div className={searchdrawer_body}>
          <Block title={'Produk Populer'} additional={'Lihat Semua'} nopadding>
            {popularSearch.map((item, i) => <span key={i} className={'searchdrawer_item'}>{item.text}</span>)}
          </Block>
        </div>
      </Drawer>
    </>
  );
};

export default SearchDrawer;
