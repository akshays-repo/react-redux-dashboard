import React, { useEffect, useState } from 'react';
import MainLayout from 'pages';
import { actionCreator } from '../../reducers/actionCreator';
import { store } from '../../reducers/configureStore';
import { connect } from 'react-redux';
import { HorizontalBar } from 'react-chartjs-2';

const ChartSectionTwo = props => {
  const [labels, setLabels] = useState([]);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    reOrderData();
  }, []);

  const reOrderData = async () => {
    let response = await props.fetchChartwo();
    response.payload.data.map(item => {
      datas.push(item.Population);
      labels.push(item.Year);
      setDatas(datas);
      setLabels(labels);
    });
  };
  console.log('labesl', Array(labels), datas);
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'AMERICAN POPULATION',
        data: datas,
        fill: false,
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
  const chartSectionTwo = () => {
    return(
        <div>

{datas.length > 0 &&     <HorizontalBar data={data} options={options} /> }
        </div>
    )
    
    
  };
  return (
    <div>
      <MainLayout content={chartSectionTwo()} />
    </div>
  );
};

const mapStoreToProps = ({ ChartTwo }) => {
  console.log('state ChartTwo', ChartTwo);
  return {
    payload: ChartTwo.payload,
    error: ChartTwo.error,
    message: ChartTwo.message,
    changed: ChartTwo.changed,
  };
};
const mapDispatchToProps = dispatch => ({
  fetchChartwo: () => dispatch(actionCreator({ method: 'GET', action_type: 'CHART_TWO' })),
});

export default connect(mapStoreToProps, mapDispatchToProps)(ChartSectionTwo);
