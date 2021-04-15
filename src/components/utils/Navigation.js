import React from 'react';
import { NavLink } from 'react-router-dom';
import { getter } from 'src/assets/js/router';
import 'src/css/utils/Navigation.css';

function Navigation(props) {
  const { customClass, item } = props;

  return (
    <div className="Navigation">
      {item.map(value => {
        const ob = getter(value);
        return (
          <NavLink
            className={`NavItem ${customClass}`}
            exact
            to={ob.path}
            key={ob.path}
          >
            {ob.name}
          </NavLink>
        );
      })}
    </div>
  );
}

export default Navigation;
