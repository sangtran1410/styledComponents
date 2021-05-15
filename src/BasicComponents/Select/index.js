import React, { forwardRef } from 'react';

// import { LoadingOutlined } from '@ant-design/icons';

// import { SelectArrowIcon, SelectArrowDisableIcon } from '../Icons/styled';

import { SelectWrapper, Option } from './styled';

export { Option };

export default forwardRef(
  ({ placeholder, children, className, disabled, loading, ...props }, ref) => {
    const cloneChild = child => React.cloneElement(child, { className });
    return (
      <SelectWrapper
        {...props}
        ref={ref}
        disabled={disabled}
        loading={loading}
        dropdownAlign={{ offset: [0, 0] }}
        dropdownMatchSelectWidth={false}
        placeholder={
          placeholder || ''
        }
      >
        {React.Children.map(children, cloneChild)}
      </SelectWrapper>
    );
  },
);
