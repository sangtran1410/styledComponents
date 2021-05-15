import React, { forwardRef } from 'react';

import {
  DateRangePickerWrapper,
  SaturdayStyled,
  SundayStyled,
  TodayStyled,
} from './styled';

// should be import from constant
const STANDARD_DATE_FORMAT = 'YYYY.MM.DD';
const GLOBAL_STANDARD_DATE_FORMAT = 'MM/DD/YYYY';

const DateRangePicker = forwardRef(({ dateRender, format, ...rest }, ref) => (
  <DateRangePickerWrapper
    {...rest}
    format={format || STANDARD_DATE_FORMAT}
    ref={ref}
    dateRender={(current, today) => {
      if (typeof dateRender === 'function') {
        return dateRender(current, today);
      }
      if (
        current.format(GLOBAL_STANDARD_DATE_FORMAT) ===
        today.format(GLOBAL_STANDARD_DATE_FORMAT)
      ) {
        return (
          <TodayStyled className="ant-picker-cell-inner customize-date-range-picker__today">
            {current.date()}
          </TodayStyled>
        );
      }
      if (current.day() === 0) {
        return (
          <SundayStyled className="ant-picker-cell-inner customize-date-range-picker__sunday">
            {current.date()}
          </SundayStyled>
        );
      }
      if (current.day() === 6) {
        return (
          <SaturdayStyled className="ant-picker-cell-inner customize-date-range-picker__saturday">
            {current.date()}
          </SaturdayStyled>
        );
      }
      return <div className="ant-picker-cell-inner">{current.date()}</div>;
    }}
  />
));

export default DateRangePicker;
