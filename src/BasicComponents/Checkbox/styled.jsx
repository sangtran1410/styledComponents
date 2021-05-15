import styled from 'styled-components';
import AntdCheckbox from 'antd/es/checkbox';
import 'antd/es/checkbox/style/css';

export const CheckboxWrapper = styled(AntdCheckbox)`
  .ant-checkbox .ant-checkbox-inner {
    border: 1px solid ${({ theme }) => theme.COLORS.BLUE_MAINSTREAM};
    border-radius: 0;
    background-color: ${({ theme }) => theme.COLORS.WHITE};

    &::after {
      border: 2px solid ${({ theme }) => theme.COLORS.RED_ORANGE};
      border-top: 0;
      border-left: 0;
    }
  }
`;
