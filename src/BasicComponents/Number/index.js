import React from 'react';

import 'antd/es/input-number/style/css';
import { InputWrapper } from './styled';

function Number(props) {
  return (
    <span>
      <InputWrapper {...props} />
    </span>
  );
}

export default Number;
