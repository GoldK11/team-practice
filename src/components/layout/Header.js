import React from 'react';
import Navigation from 'src/components/utils/Navigation';
import { getter } from 'src/assets/js/router';

function Header() {
  const leftNav = getter('home', true);
  const centerNav = getter('center', true);
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
        <div className="Center">
          <Navigation
            item={centerNav}
            customClass="MainColorText Button Size14"
          />
        </div>
        <div className="Right">
          <Navigation
            item={rightNav}
            customClass="MainColorText Button Size14"
          />
        </div>
      </div>
    </div>
  );
}
export default Header;
