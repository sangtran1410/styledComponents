import styled from 'styled-components';
import Radio from 'antd/es/radio';
import 'antd/es/radio/style/css';

export const RadioWrapper = styled(Radio)`
  .ant-radio-inner {
    width: 1.8rem;
    height: 1.8rem;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_10};
    transition: none;

    &::after {
      top: 0.4rem;
      left: 0.4rem;
      animation: none;
      background-color: ${({ theme }) => theme.COLORS.RED_ORANGE};
    }
  }

  .ant-radio-checked .ant-radio-inner,
  .ant-radio-checked:hover .ant-radio-inner,
  .ant-radio:hover .ant-radio-inner {
    border: ${({ theme }) => theme.BORDERS.INPUT};
  }

  /* Remove animation when clicking */
  .ant-radio-checked::after {
    border-color: ${({ theme }) => theme.COLORS.GRAY_10};
    animation: none;
    animation-fill-mode: none;
  }

  &.ant-radio-wrapper,
  .ant-radio,
  .ant-radio-inner,
  .ant-radio-input {
    cursor: default;
  }

  &.ant-radio-wrapper:hover .ant-radio,
  .ant-radio:hover .ant-radio-inner,
  .ant-radio-input:focus + .ant-radio-inner {
    border-color: ${({ theme }) => theme.COLORS.GRAY_10};
    box-shadow: none;
  }
`;

export const { Group } = Radio;
