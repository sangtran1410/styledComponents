import React, { forwardRef } from 'react';

import { TextAreaWrapper } from './styled';

const TextArea = ({ className, ...props }, ref) => (
  <TextAreaWrapper className={className} {...props} ref={ref} />
);

export default forwardRef(TextArea);
