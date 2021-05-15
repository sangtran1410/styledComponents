import styled from 'styled-components';
import InputNumber from 'antd/es/input-number';

export const InputWrapper = styled(InputNumber)`
  padding-left: 8px;
  padding-right: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_10};
  border-radius: 3px;
  box-sizing: border-box;
  box-shadow: none !important;

  span {
    color: ${({ theme }) => theme.COLORS.DARK_BLUE} !important;
  }

  input {
    height: 24px;
  }

  &:hover,
  &:focus {
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_BLUE} !important;
    border-color: ${({ theme }) => theme.COLORS.DARK_BLUE} !important;
  }
  &:read-only:focus {
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_10};
  }
`;
