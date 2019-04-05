import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Gdpr = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17.32 22.5"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M0,11.25v9.07A2.18,2.18,0,0,0,2.18,22.5h13a2.18,2.18,0,0,0,2.18-2.18V11.25a2.18,2.18,0,0,0-2.18-2.18h-.41v-3a6.07,6.07,0,0,0-12.13,0v3l-.4,0A2.18,2.18,0,0,0,0,11.25ZM4.36,6.07a4.3,4.3,0,1,1,8.6,0v3l-.4,0H4.36ZM1.77,10.84H15.55v9.89H1.77Z" />
          <polygon points="8.66 12.49 9.51 14.62 11.64 14.62 9.8 16.17 10.79 18.45 8.66 17.04 6.53 18.45 7.52 16.17 5.67 14.62 7.81 14.62 8.66 12.49" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Gdpr.propTypes = {
  color: PropTypes.string,
};

Gdpr.defaultProps = {
  color: 'currentColor',
};

export default Gdpr;
