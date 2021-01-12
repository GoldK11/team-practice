import React from 'react';
import { NavLink } from 'react-router-dom';
import 'src/css/utils/Navigation.css';

function Navigation(props) {
  const { customClass, item } = props;
  return (
    <div className="Navigation">
      {item.map(ob => (
        <NavLink
          className={`NavItem ${customClass}`}
          exact
          to={ob.path}
          key={ob.path}
        >
          {ob.name}
        </NavLink>
      ))}
    </div>
  );
}

export default Navigation;
