import { useState } from 'react';
import { useRouter } from 'next/router';
import Button from '@vendor/commons/Button';
import SearchDrawer from '@vendor/core/SearchDrawer';

import HomeIcon from '@public/media/icons/home.svg';
import SearchIcon from '@public/media/icons/search.svg';
import UserIcon from '@public/media/icons/user.svg';
import BasketIcon from '@public/media/icons/supermarket.svg';
import classNames from 'classnames';

const buttonList = [
  {
    name: 'home',
    link: '/',
    icon: <HomeIcon />,
    onClick: null
  },
  {
    name: 'search',
    link: search.enable ? null : '/search',
    icon: <SearchIcon />,
    onClick: () => { 
      setOpenSearch(!openSearch); 
      return;
    }
  },
  {
    name: 'cart',
    link: '/cart',
    icon: <BasketIcon />,
    onClick: null
  },
  {
    name: 'account',
    link: '/account',
    icon: <UserIcon />,
    onClick: null
  }
];

const ButtonNavigation = ({ children, link, name, onClick }) => {
  const Router = useRouter();
  if (name === 'search' && link === null) {
    return (
      <Button fullWidth onClick={onClick}>
        <SearchIcon className={'search_icon'} />
      </Button>
    );
  }

  return (
    <Button fullWidth onClick={() => { Router.push(link); }}>
      {children}
    </Button>
  );
};

const Navigation = ({ active, search, className}) => {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <div className={classNames('navigation', className)}>
      {buttonList.map((data, i) => 
        <div className={classNames('navigation_item', data.name)} key={i}>
          <ButtonNavigation link={data.link} name={data.name} onClick={data.onClick}>
            {data.icon}
          </ButtonNavigation>
        </div>
      )}

      {search.enable && search.type === 'drawer' && (
        <SearchDrawer 
          open={openSearch} 
          handleClose={() => { setOpenSearch(!openSearch); }}/> 
      )}
    </div>
  );
};

export default React.memo(Navigation);
