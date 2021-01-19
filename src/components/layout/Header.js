import React from 'react';
import Navigation from 'src/components/utils/Navigation';
import { getter } from 'src/assets/js/router';
import CONST from 'src/assets/js/const';

function Header() {
  const leftNav = getter(CONST.ROUTER.META.POSITION.LEFT);
  const centerNav = getter(CONST.ROUTER.META.POSITION.CENTER);
  const rightNav = getter(CONST.ROUTER.META.POSITION.RIGHT);

  return (
    <div className="Header MainColor">
      <div className="LeftNav">
        <Navigation item={leftNav} customClass="MainColorText Button Size14" />
      </div>
      <div className="CenterNav">
        <Navigation
          item={centerNav}
          customClass="MainColorText Button Size14"
        />
      </div>
      <div className="RightNav">
        <Navigation item={rightNav} customClass="MainColorText Button Size14" />
      </div>
    </div>
  );
}
export default Header;
