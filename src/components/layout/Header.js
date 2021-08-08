import React from 'react';
import Navigation from 'src/components/utils/Navigation';
import { getter } from 'src/assets/js/router';

function Header() {
  const leftNav = getter('home', true);
  const mainNav = getter('main', true);
  const rightNav = getter('right', true);

  return (
    <div className="Header MainColor">
      <div className="HeaderContent">
        <div className="Left">
          <Navigation
            item={leftNav}
            customClass="MainColorText Button Size21 Bold"
          />
        </div>
        <div className="Right">
          <Navigation
            item={rightNav}
            customClass="MainColorText Button Size14"
          />
        </div>
        <div className="Main">
          <Navigation
            item={mainNav}
            customClass="MainColorText Button Size15 MainItem "
          />
        </div>
      </div>
    </div>
  );
}
export default Header;
