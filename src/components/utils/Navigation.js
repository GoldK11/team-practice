import React from 'react';
import { NavLink } from 'react-router-dom';
import { getter } from 'src/assets/js/router';
import 'src/css/utils/Navigation.css';
import ButtonBase from '@material-ui/core/ButtonBase';

function Navigation(props) {
  const { customClass, item } = props;

  return (
    <div className="Navigation">
      {item.map(value => {
        const ob = getter(value);
        return (
          <ButtonBase key={ob.path}>
            <NavLink className={`NavItem ${customClass}`} exact to={ob.path}>
              {ob.name}
            </NavLink>
          </ButtonBase>
        );
      })}
    </div>
  );
}

export default Navigation;
