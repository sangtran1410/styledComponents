import styled, { css } from 'styled-components';
import AntdSelect from 'antd/es/select';
import 'antd/es/select/style/css';

export const SelectWrapper = styled(AntdSelect)`
  &&& .ant-select-selector {
    height: 2.4rem;
    border: 1px solid;
    border-color: ${({ theme }) => theme.COLORS.GRAY_10};
    border-radius: 3px;
    box-shadow: none !important;

    &:hover,
    &:focus,
    &:active {
      border-color: ${({ theme }) => theme.COLORS.DARK_BLUE};
    }
    input {
      height: 2.4rem;
    }

    .ant-select-selection-item {
      line-height: 2.4rem;
    }

    .ant-select-selection-placeholder {
      line-height: 2.4rem;
    }
  }
`;

export const { Option } = AntdSelect;

export const selectGlobalStyles = css`
  .ant-select-dropdown {
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_BLUE};
    padding: 0 !important;
    .ant-select-item {
      min-height: 2rem !important;
      height: 2.2rem;
      align-items: center;

      .ant-select-item-option {
        padding: 0px 1.2rem;
      }
    }

    .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
      background: ${({ theme }) => theme.COLORS.BLUE_6};
      border-color: ${({ theme }) => theme.COLORS.GRAY_10};
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    .ant-select-item-option-active:not(.ant-select-item-option-disabled) {
      background: ${({ theme }) => theme.COLORS.HOVER_OPTION};
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  .ant-select-disabled.ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    background: ${({ theme }) => theme.COLORS.GRAY_17} !important;
    border-color: ${({ theme }) => theme.COLORS.GRAY_10} !important;
    color: ${({ theme }) => theme.COLORS.GRAY_18} !important;
  }
  .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    border-color: ${({ theme }) => theme.COLORS.DARK_BLUE} !important;
  }

  .ant-select-dropdown,
  .ant-select-dropdown-hidden,
  .ant-select-dropdown div {
    transition: none !important;
    animation-duration: 0s !important;
  }
`;
