import React from 'react';
import Navigation from 'src/components/utils/Navigation';
import Router from 'src/assets/js/router';
import CONST from 'src/assets/js/const';

function Header() {
  const leftNav = Router.filter(
    ob => ob.meta.position === CONST.ROUTER.META.POSITION.LEFT,
  );
  const centerNav = Router.filter(
    ob => ob.meta.position === CONST.ROUTER.META.POSITION.CENTER,
  );
  const rightNav = Router.filter(
    ob => ob.meta.position === CONST.ROUTER.META.POSITION.RIGHT,
  );

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
