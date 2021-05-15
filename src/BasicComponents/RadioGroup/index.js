import React, { forwardRef } from 'react';

import { RadioWrapper as Radio, Group } from './styled';

const RadioGroup = ({ className, children, ...restProps }, ref) => (
  <Group className={className} {...restProps} ref={ref}>
    {children}
  </Group>
);

export { Radio };

export default forwardRef(RadioGroup);
