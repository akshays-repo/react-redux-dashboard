import React, { useEffect, useState } from 'react';
import { actionCreator } from '../../reducers/actionCreator';
import { store } from '../../reducers/configureStore';
import { connect } from 'react-redux';
import MainLayout from 'pages';
import { Bar } from 'react-chartjs-2';

const ChartSectionOne = props => {
  const [chartData, setChartData] = useState("");

  useEffect(() => {
    props.fetchChart();
  }, []);


  useEffect(() =>{
    setChartData(props.payload.chartData);
  })
  const cardSectionOne = () => {

    const data = {
      labels: chartData?.labels,
      datasets: [
        {
          label:chartData?.datasets?.label,
          data: chartData?.datasets?.data,
          fill: false,
          backgroundColor:chartData?.datasets?.backgroundColor,
          borderColor: 'rgba(95, 213, 237, 0.2)',
        },
      ],
    };
  
    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };
  


    return (
      <div >
        <Bar data={data} options={options} />
      </div>
    );
  };

  return (
    <div>
      <MainLayout content={cardSectionOne()} />
    </div>
  );
};

const mapStoreToProps = ({ ChartOne }) => {
  console.log('state', ChartOne);
  return {
    payload: ChartOne.payload,
    error: ChartOne.error,
    message: ChartOne.message,
    changed: ChartOne.changed,
  };
};
const mapDispatchToProps = dispatch => ({
  fetchChart: () => dispatch(actionCreator({ method: 'GET', action_type: 'CHART_ONE' })),
});

export default connect(mapStoreToProps, mapDispatchToProps)(ChartSectionOne);
