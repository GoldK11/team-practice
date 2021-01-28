import React from 'react';
import Navigation from 'src/components/utils/Navigation';
import { getter } from 'src/assets/js/router';

function Header() {
  const leftNav = getter('home', true);
  const rightNav = getter('header', true);

  return (
    <div className="Header MainColor">
      <div className="LeftNav">
        <Navigation item={leftNav} customClass="MainColorText Button Size14" />
      </div>
      <div className="CenterNav" />
      <div className="RightNav">
        <Navigation item={rightNav} customClass="MainColorText Button Size14" />
      </div>
    </div>
  );
}
export default Header;
