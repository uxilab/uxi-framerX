import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const City = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15.75 16.62"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M7.88,0A4.1,4.1,0,0,0,3.78,4.09c0,1.93,2.86,8.31,3.44,9.58a.72.72,0,0,0,1.31,0C8.88,12.9,12,6.07,12,4.09A4.1,4.1,0,0,0,7.88,0ZM8,11.33l-.11.27-.11-.27c-.6-1.38-2.54-6-2.54-7.24a2.66,2.66,0,0,1,5.31,0C10.53,5.34,8.59,10,8,11.33Z" />
          <circle cx="7.87" cy="4.09" r="1.14" />
          <path d="M1.93,10.22.13,14.44a1.56,1.56,0,0,0,1.44,2.18H14.19a1.56,1.56,0,0,0,1.44-2.18l-1.81-4.22a1.56,1.56,0,0,0-1.44-.95h-.6v1.44h.68l0,.08,1.88,4.39h-13l1.91-4.47h.65V9.28H3.37A1.56,1.56,0,0,0,1.93,10.22Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

City.propTypes = {
  color: PropTypes.string,
};

City.defaultProps = {
  color: 'currentColor',
};

export default City;
