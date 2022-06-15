import { createGlobalStyle } from 'styled-components';
import Colors from './Colors';

export default createGlobalStyle`
  @font-face {
    font-display: block;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    src: url(/fonts/NotoSansKR-Regular.woff2) format('woff2'),
          url(/fonts/NotoSansKR-Regular.woff) format('woff'),
          url(/fonts/NotoSansKR-Regular.otf) format('opentype');
  }
  @font-face {
    font-display: block;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    src: url(/fonts/NotoSansKR-Medium.woff2) format('woff2'),
          url(/fonts/NotoSansKR-Medium.woff) format('woff'),
          url(/fonts/NotoSansKR-Medium.otf) format('opentype');
  }
  @font-face {
    font-display: block;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    src: url(/fonts/NotoSansKR-Bold.woff2) format('woff2'),
          url(/fonts/NotoSansKR-Bold.woff) format('woff'),
          url(/fonts/NotoSansKR-Bold.otf) format('opentype');
  }
  @font-face {
    font-display: block;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 900;
    src: url(/fonts/NotoSansKR-Black.woff2) format('woff2'),
          url(/fonts/NotoSansKR-Black.woff) format('woff'),
          url(/fonts/NotoSansKR-Black.otf) format('opentype');
  }

  html,
  body,
  body > div:first-child,
  div#__next,
  div#__next > div {
    height: 100%;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  body {
    background-color: ${Colors.white};
    overflow-x: none;
  }
  *, *::after, *::before {
    box-sizing: inherit;
  }
  * {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: rgba(216, 216, 216, 0.1);
  }
  html, body,
  hgroup, h1, h2, h3, h4, h5, h6,
  dl, dt, dd, ol, ul, li,
  p, blockquote, pre, abbr,
  form, fieldset, legend, label, input, select, textarea, button,
  table, caption, thead, tbody, tfoot, tr, th, td {
    padding: 0;
    margin: 0;
  }
  dl, ol, ul, li {
    list-style: none;
  }
  fieldset, iframe, img {
    border: 0;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
    &:hover, &:active, &:focus, &:visited{
      text-decoration: none;
    }
  }
  button {
    border: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    outline: none;
    cursor: pointer;
  }
  *::placeholder {
    color: ${Colors.silver};
    opacity: 1;
  }
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input::-ms-clear {
    display: none;
  }
  input:invalid {
    box-shadow: none;
  }
  input:focus {
    outline: none;
  }
  input, textarea {
    -webkit-user-select: auto;
    -webkit-appearance: none;
  }
  body,
  input, select, textarea, button {
    font-family: "Noto Sans KR", "맑은 고딕", "Malgun Gothic", "Apple SD Gothic Neo", sans-serif;
    color: ${Colors.black};
  }
  input[type=password] {
    font-family: "맑은 고딕", sans-serif;
  }
  img {
    width: 100%;
  }

  ::selection {
    background: ${Colors.lightGreen};
    text-shadow: none;
  }

  body::-webkit-scrollbar {
    width: 4px;
    background-color:${Colors.lightGreen}
  }

  body::-webkit-scrollbar-thumb {
    background-color:  ${Colors.vividCyan};
  }

  body::-webkit-scrollbar-track {
    background-color:${Colors.darkGrayishBlue}
  }
`;
