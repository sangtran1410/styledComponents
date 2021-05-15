import { createGlobalStyle } from 'styled-components';
import { selectGlobalStyles } from '../BasicComponents/Select/styled';
// import { selectGlobalStyles } from './BasicComponents/Select/styled';

export const GlobalStyle = createGlobalStyle`

  html {
    font-size: 62.5%;
  }

  body {
    letter-spacing: -1px;
  }

  input,
  textarea,
  select {
    outline: none;

    &:-webkit-autofill,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:active {
      border:none;
      background-image:none;
      background-color:transparent;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
      transition: background-color 5000s ease-in-out 0s;
    }

  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.BLUE_2};
    font-size: 1.2rem;

    &:hover,
    &:active,
    &:focus {
      color: ${({ theme }) => theme.COLORS.BLUE_1};
    }
  }

  ${selectGlobalStyles}
`;
