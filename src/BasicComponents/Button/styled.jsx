import styled from 'styled-components';
import AntdButton from 'antd/es/button';

import {
  SearchIcon,
  PlusIcon,
  MinusIcon,
  RefreshIcon,
} from '../Icons';

export const ButtonStyled = styled(AntdButton)`
  box-shadow: none !important;
  display: flex !important;
  justify-content: center;
  align-items: center;

  &.btn-large-size {
    height: 4.4rem;
    line-height: 4.4rem;
    padding: 0 4rem;
    border-radius: 0.3rem;
    font-size: 1.2rem;
  }

  &.btn-medium-size {
    height: 3.4rem;
    line-height: 3.4rem;
    padding: 0 3rem;
    border-radius: 0.3rem;
    font-size: 1.2rem;
  }

  &.btn-small-size {
    height: 2.4rem;
    line-height: 2.4rem;
    padding: 0 1.5rem;
    border-radius: 0.3rem;
    font-size: 1.2rem;
  }

  &.btn-primary-type {
    border: 1px solid transparent;
    display: inline-block;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.DARK_BLUE};
    vertical-align: top;
  }

  &.btn-secondary-type {
    border: 1px solid transparent;
    display: inline-block;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.GRAY_14};
    vertical-align: top;
  }

  &.btn-normal-type {
    display: inline-block;
    vertical-align: top;
  }

  &.btn-disabled,
  &:disabled {
    background-color: ${({ theme }) => theme.COLORS.GRAY_12} !important;
    cursor: default;
    border: 1px solid transparent;
  }

  &.btn-primary-type:hover,
  &.btn-primary-type:active,
  &.btn-primary-type:visited,
  &.btn-primary-type:focus {
    background-color: ${({ theme }) => theme.COLORS.METALLIC_BLUE};
    outline: none;
    border: 1px solid transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  &.btn-secondary-type:hover,
  &.btn-secondary-type:active,
  &.btn-secondary-type:visited,
  &.btn-secondary-type:focus {
    background-color: ${({ theme }) => theme.COLORS.GRAY_15};
    outline: none;
    border: 1px solid transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  &.btn-disabled:hover,
  &:disabled:hover {
    color: ${({ theme }) => theme.COLORS.WHITE};
    outline: none;
    border: 1px solid transparent;
  }

  &.add-row-button {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  &.delete-row-button {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  &.move-down-button,
  &.move-up-button {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  &.reset-button {
    margin-left: 0.5rem;
  }
`;

export const ButtonSearchIcon = styled(SearchIcon)`
  width: 1.5rem;
  height: 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
`;

export const AddRowIcon = styled(PlusIcon)`
  width: 1.5rem;
  height: 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
  margin-top: 0.4rem;
`;

export const DeleteRowIcon = styled(MinusIcon)`
  width: 1.5rem;
  height: 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
  margin-top: 0.4rem;
`;

export const ResetIcon = styled(RefreshIcon)`
  width: 2rem;
  height: 2rem;
  display: block;
  background-size: cover;
  min-width: 2rem;
`;
