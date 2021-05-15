import React, { forwardRef } from 'react';

import { CheckboxWrapper } from './styled';

const CheckboxComponent = forwardRef(
  ({ children, autoFocus = false, ...props }, ref) => (
    <CheckboxWrapper {...props} ref={ref} autoFocus={autoFocus}>
      {children}
    </CheckboxWrapper>
  ),
);

CheckboxComponent.displayName = 'CheckboxComponent';
CheckboxComponent.Group = CheckboxWrapper.Group;

export default CheckboxComponent;
