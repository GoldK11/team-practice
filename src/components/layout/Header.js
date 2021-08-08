import React from 'react';
import Navigation from 'src/components/utils/Navigation';
import CONST from 'src/assets/js/const';

function Header() {
  const leftNav = [CONST.ROUTER.NAME.MAIN];
  const rightNav = [
    CONST.ROUTER.NAME.QUIZ_SELECT,
    CONST.ROUTER.NAME.WORD_BOOK,
    CONST.ROUTER.NAME.MYPAGE,
    CONST.ROUTER.NAME.LOGIN,
  ];
  const mainNav = [CONST.ROUTER.NAME.ANALYZE];
  return (
    <div className="Header MainColor">
      <div className="HeaderContent">
        <div className="Left">
          <Navigation item={leftNav} customClass="MainColorText Size21 Bold" />
        </div>
        <div className="Right">
          <Navigation item={rightNav} customClass="MainColorText Size14" />
        </div>
        <div className="Main">
          <Navigation
            item={mainNav}
            customClass="MainColorText Size16 MainItem"
          />
        </div>
      </div>
    </div>
  );
}
export default Header;
