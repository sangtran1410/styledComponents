import React, { useState, useCallback, useEffect } from 'react';
// import * as chartjs from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ChartHeader, ChartNotFound, ChartTitle, ChartWrapper } from './styles.js';

/**
 * Document in https://www.chartjs.org/docs/latest/charts/bar.html
 * data format (array object)
 * https://github.com/jerairrest/react-chartjs-2/blob/master/example/src/components/bar.js
 */
const BarChart = ({
  width = '450px',
  height = '450px',
  title = 'Chart title',
  data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  },
  // data = [
  //   {
  //     label: 'My First Dataset',
  //     data: [65, 59, 80, 81, 56, 55, 40],
  //     backgroundColor: [
  //       'rgba(255, 99, 132, 0.2)',
  //       'rgba(255, 159, 64, 0.2)',
  //       'rgba(255, 205, 86, 0.2)',
  //       'rgba(75, 192, 192, 0.2)',
  //       'rgba(54, 162, 235, 0.2)',
  //       'rgba(153, 102, 255, 0.2)',
  //       'rgba(201, 203, 207, 0.2)'
  //     ],
  //     borderColor: [
  //       'rgb(255, 99, 132)',
  //       'rgb(255, 159, 64)',
  //       'rgb(255, 205, 86)',
  //       'rgb(75, 192, 192)',
  //       'rgb(54, 162, 235)',
  //       'rgb(153, 102, 255)',
  //       'rgb(201, 203, 207)',
  //     ],
  //     borderWidth: 1,
  //   },
  // ],
  // data = {
  //   datasets: [{
  //     label: 'My First Dataset',
  //     data: [65, 59, 80, 81, 56, 55, 40],
  //     backgroundColor: [
  //       'rgba(255, 99, 132, 0.2)',
  //       'rgba(255, 159, 64, 0.2)',
  //       'rgba(255, 205, 86, 0.2)',
  //       'rgba(75, 192, 192, 0.2)',
  //       'rgba(54, 162, 235, 0.2)',
  //       'rgba(153, 102, 255, 0.2)',
  //       'rgba(201, 203, 207, 0.2)'
  //     ],
  //     borderColor: [
  //       'rgb(255, 99, 132)',
  //       'rgb(255, 159, 64)',
  //       'rgb(255, 205, 86)',
  //       'rgb(75, 192, 192)',
  //       'rgb(54, 162, 235)',
  //       'rgb(153, 102, 255)',
  //       'rgb(201, 203, 207)',
  //     ],
  //     borderWidth: 1,
  //   }]
  // },
  legend,
  options,
}) => {
  const [chartLegend] = useState({
    legend: {
      position: 'bottom',
      ...legend,
    },
  });
  // const [dataChart, setDataChart] = useState(data[0]);

  const dataChart = data;
  console.log('dataChart', dataChart)
  // useEffect(() => {
  //   setDataChart(data[0]);
  // }, [setDataChart, data]);

  return (
    // <ChartWrapper width={width} height={height}>
      <div>
          <Bar
            data={dataChart}
            options={{
              ...options,
              maintainAspectRatio: false,
            }}
            {...chartLegend}
          />
      </div>

    // </ChartWrapper>
  );
};

export default BarChart;
