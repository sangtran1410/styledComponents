import styled from 'styled-components';
import { Input } from 'antd';

const AntdTextArea = Input.TextArea;

export const TextAreaWrapper = styled(AntdTextArea)`
  &.ant-input {
    resize: none;
    font-size: 1.2rem;
    border-radius: unset;
    color: ${({ theme }) => theme.COLORS.ONYX};
    padding: 0.1rem 0.8rem;
    border: ${({ theme }) => theme.BORDERS.INPUT};
    box-sizing: border-box;
    box-shadow: none;

    &:hover,
    &:focus {
      box-shadow: none;
      border: ${({ theme }) => theme.BORDERS.FOCUSED_INPUT};
    }
    &[disabled],
    &:read-only {
      background-color: ${({ theme }) => theme.COLORS.GRAY_17};
      border: ${({ theme }) => theme.BORDERS.INPUT};
    }
  }
`;
