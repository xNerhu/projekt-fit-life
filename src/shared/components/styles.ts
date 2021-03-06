import { css } from 'styled-components';

import { fonts } from '@shared/constants';
import { body2 } from '@shared/mixins';

export const Style = css`
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url(${fonts.robotoRegular}) format('woff2');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    src: url(${fonts.robotoMedium}) format('woff2');
  }

  @font-face {
    font-family: 'Edo';
    font-style: normal;
    font-weight: 400;
    src: url(${fonts.edoRegular}) format('woff2');
  }

  body {
    width: 100vw;
    height: 100vh;
    cursor: default;
    margin: 0;
    padding: 0;
    background-color: #fff;
    overflow-x: hidden;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0) !important;
    ${body2()};
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: #000;
  }
`;
