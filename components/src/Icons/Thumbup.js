import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Thumbup = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14.38 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M13.85,6.83a2.61,2.61,0,0,0-2.08-1H9l1.27-3.21A1.89,1.89,0,0,0,8.47,0,1.86,1.86,0,0,0,6.73,1.16L3.66,7.46v0H0V16H10.39a2.6,2.6,0,0,0,2.5-1.9l1.39-5A2.59,2.59,0,0,0,13.85,6.83ZM1.18,8.62H3.32v6.2H1.18Zm9.21,6.2H4.5V8.42L7.8,1.63a.74.74,0,0,1,1.26-.14.7.7,0,0,1,.08.67l-1.59,4a.59.59,0,0,0,.33.76L8,7V7h3.78a1.44,1.44,0,0,1,1.14.56,1.42,1.42,0,0,1,.28.88H11.25a.45.45,0,1,0,0,.9H13l-.36,1.3H10.73a.45.45,0,1,0,0,.89h1.66L12,12.86H10.5a.45.45,0,1,0,0,.89h1.26v0A1.44,1.44,0,0,1,10.39,14.82Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Thumbup.propTypes = {
  color: PropTypes.string,
};

Thumbup.defaultProps = {
  color: 'currentColor',
};

export default Thumbup;
