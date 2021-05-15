import styled from 'styled-components';
import { Input as AntdInput } from 'antd';

export const InputWrapper = styled(AntdInput)`
  &.ant-input,
  &.ant-input-affix-wrapper {
    color: ${({ theme }) => theme.COLORS.ONYX};
    font-size: 1.2rem;
    height: ${({ theme }) => theme.HEIGHTS.INPUT};
    padding: 0.1rem 0.8rem;
    border-radius: 0.3rem;
    border: ${({ theme }) => theme.BORDERS.INPUT};
    box-sizing: border-box;
    box-shadow: none;

    &:hover,
    &:focus,
    &.ant-input-affix-wrapper-focused {
      box-shadow: none;
      border: ${({ theme }) => theme.BORDERS.FOCUSED_INPUT};
    }
  }

  /* Disabled & Read-Only */
  &.ant-input-affix-wrapper-readonly,
  &.ant-input-affix-wrapper-disabled,
  .ant-input[disabled],
  .ant-input:read-only,
  &.ant-input[disabled],
  &.ant-input:read-only {
    background-color: ${({ theme }) => theme.COLORS.GRAY_17};
    border: ${({ theme }) => theme.BORDERS.INPUT};
  }
`;
