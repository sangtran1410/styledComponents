import React, { forwardRef } from 'react';

import { InputWrapper } from './styled';

import TextArea from '../TextArea';

const Input = forwardRef(({ className, ...props }, ref) => (
  <InputWrapper className={className} {...props} ref={ref} />
));

const { Search, Group, Password } = InputWrapper;
Input.displayName = 'Input';
Input.Password = Password;
Input.Search = Search;
Input.Group = Group;
Input.TextArea = TextArea;
export default Input;
