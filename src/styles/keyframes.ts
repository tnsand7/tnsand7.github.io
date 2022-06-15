import { keyframes } from 'styled-components';

export const beforeLoadingBarAnimation = keyframes`
  0%{left: -12px; top: -12px;}
  25%{left:42px; top:-12px;}
  50%{left: 42px; top: 42px;}
  75%{left: -12px; top: 42px;}
  100%{left:-12px; top:-12px;}
`;

export const afterLoadingBarAnimation = keyframes`
  0%{width: 0px;}
  70%{width: 40px; opacity: 1;}
  90%{opacity: 0; width: 40px;}
  100%{opacity: 0;width: 0px;}
`;
