import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Plusbox = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width="24px"
      height="24px"
    >
      <g id="Group_559" data-name="Group 559" transform="translate(-289 -361)">
        <g
          id="Rectangle_1_copy_4"
          data-name="Rectangle 1 copy 4"
          transform="translate(289 361)"
          fill="transparent"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.6"
        >
          <rect width="20" height="20" stroke="none" />

          <rect x="0.5" y="0.5" width="19" height="19" />
        </g>

        <path
          id="Path_394"
          data-name="Path 394"
          d="M686.277,141.033h-4.813V136.22h-2.253v4.813H674.4v2.253h4.813V148.1h2.253v-4.813h4.813Z"
          transform="translate(-381.397 228.78)"
        />
      </g>
    </svg>
  </SvgIcon>
);

Plusbox.propTypes = {
  color: PropTypes.string,
};

Plusbox.defaultProps = {
  color: 'currentColor',
};

export default Plusbox;
