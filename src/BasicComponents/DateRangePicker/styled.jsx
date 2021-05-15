import styled, { css } from 'styled-components';
import AntdDatePicker from 'antd/es/date-picker';
import 'antd/es/date-picker/style/css';

const { RangePicker } = AntdDatePicker;

export const dateRangePickerGlobal = css`
  .ant-picker-dropdown-range {
    .ant-picker-cell-in-range {
      .customize-date-range-picker__saturday,
      .customize-date-range-picker__sunday {
        background: transparent !important;
      }
    }
  }
`;

export const DateRangePickerWrapper = styled(RangePicker)`
  height: 24px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_10};
  box-shadow: none !important;
  width: 100%;

  &:hover,
  &:active {
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_BLUE} !important;
  }
`;

export const SaturdayStyled = styled.div`
  background: ${({ theme }) => theme.COLORS.GRAY_LIGHTEN};
  color: ${({ theme }) => theme.COLORS.HOT_PINK};
  width: 100%;
`;

export const SundayStyled = styled.div`
  background: ${({ theme }) => theme.COLORS.GRAY_LIGHTEN};
  color: ${({ theme }) => theme.COLORS.HOT_PINK};
  width: 100%;
`;

export const TodayStyled = styled.div`
  background: ${({ theme }) => theme.COLORS.LIGHT_SEA_GREEN} !important;
  color: ${({ theme }) => theme.COLORS.WHITE} !important;
`;
