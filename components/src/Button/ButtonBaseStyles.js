import { css } from 'styled-components';

/* eslint-disable indent */
const ButtonBaseStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  background-image: none;
  border-width: 1px;
  border-style: solid;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
  box-sizing: border-box;
  min-height: 32px;
  /* border-radius: 2px; */
  user-select: none;
  /* transition: all 0.38s ease-out; */
  transition: ${({ theme: { transition } }) => transition.defaultAll};
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  svg {
    min-width: 26px;
    width: 26px;
    max-width: 26px;
    min-height: 26px;
    height: 26px;
    max-height: 26px;
  }
  outline: none;
  box-shadow: none;
  &:not(:hover) {
    &:focus {
      ${({ disabled, theme }) => (!disabled
        ? `box-shadow: ${theme.outlineShadow}; outline: ${theme.outline}`
        : '')
      };
    }
  }
`;
/* eslint-enable indent */

export default ButtonBaseStyles;
