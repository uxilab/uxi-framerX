import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Databreach = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12.05 15.65"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M10.53,6.31h-.29V4.22A4.22,4.22,0,0,0,9,1.21l-.76,1a2.94,2.94,0,0,1,.81,2V6.3H8.15L7.44,7.54h0L6.59,9,4.94,6.71c-.09-.13-.19-.27-.27-.4H3V4.22a3,3,0,0,1,3-3,2.86,2.86,0,0,1,.73.1c.32-.32.63-.65.92-1A4.09,4.09,0,0,0,6,0,4.23,4.23,0,0,0,1.8,4.22V6.3H1.52A1.52,1.52,0,0,0,0,7.83v6.31a1.52,1.52,0,0,0,1.52,1.51h9a1.52,1.52,0,0,0,1.52-1.51V7.83A1.52,1.52,0,0,0,10.53,6.31Zm-9.3,8.11V7.54H4.3L6.09,10l-.6,2.47,1.16,1.93Zm6.59,0L6.56,12.33l.54-2.22L8.6,7.54h2.22v6.88Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Databreach.propTypes = {
  color: PropTypes.string,
};

Databreach.defaultProps = {
  color: 'currentColor',
};

export default Databreach;
