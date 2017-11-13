import React from 'react';
import PropTypes from 'prop-types';

export default function PresentationMode({isOn, onToggle}) {
  return (
    <div
      className="top-bar__menu-button top-bar__presentation-mode"
      onClick={onToggle}
    >
      {
        isOn ?
          <span>Hide</span> :
          <span>Show</span>
      }
    </div>
  );
}

PresentationMode.propTypes = {
  isOn: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};
