import React from 'react';
import { useLocation } from 'react-router-dom';
import CONST from 'src/assets/js/const';

function Background() {
  const backComponent =
    useLocation().pathname === CONST.ROUTER.PATH.HOME ? (
      <div className="Background">
        <div className="Item1 MainBody" />
        <div className="Item2 MainBody2" />
        <div className="Item3 MainBody" />
        <div className="Item4 MainBody2" />
        <div className="Item5 MainBody" />
        <div className="Item6 MainBody2" />
      </div>
    ) : null;

  return backComponent;
}

export default Background;
