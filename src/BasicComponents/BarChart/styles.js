import styled from 'styled-components';

export const ChartWrapper = styled.div`
  width: ${(props) => `${props.width}`};
  height: ${(props) => `${props.height}`};
`;

export const ChartHeader = styled.div`

`;

export const ChartNotFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  width: ${(props) => `${props.width}` };
  height: ${(props) => `${props.height}`};
`;

export const ChartTitle = styled.div`
  display: block;
`;

// .chart-wrapper {
//   .p-8();
//   .chart-header {
//     .chart-title {
//       display: block;
//       .block-title();
//     }

//     .chart-select {
//       width: 12rem;
//     }
//   }

//   .chart-notfound {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-size: 1.8rem;
//   }
// }
