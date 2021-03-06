import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Training = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22.61 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M5.94,8.67a3,3,0,1,0-3-3A3,3,0,0,0,5.94,8.67Zm0-5a2,2,0,1,1-2,2A2,2,0,0,1,5.94,3.66Z" />
          <path d="M22,0h-16a.65.65,0,0,0,0,1.3H21.31V14.69H11.89v-.11a3.8,3.8,0,0,0-1-2.61L13.93,8.9a.48.48,0,0,0,0-.7.5.5,0,0,0-.71,0l-3.11,3.11a7.24,7.24,0,0,0-4.17-1.16C2.44,10.15,0,12,0,14.58V16H22a.65.65,0,0,0,.65-.65V.65A.65.65,0,0,0,22,0ZM1.32,14.58c0-1.83,1.9-3.11,4.62-3.11s4.63,1.28,4.63,3.11v.1H1.32Z" />
          <path d="M18,6.44a.5.5,0,1,0,0-1H11.4a.5.5,0,0,0,0,1Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Training.propTypes = {
  color: PropTypes.string,
};

Training.defaultProps = {
  color: 'currentColor',
};

export default Training;
