import React, { useEffect } from 'react';
import { actionCreator } from '../../reducers/actionCreator';
import { store } from '../../reducers/configureStore';
import { connect } from 'react-redux';
import MainLayout from 'pages';
import { Card, Col, Row } from 'antd';
import moment from 'moment'

import './style.scss';
const CardSection = props => {
  useEffect(() => {
    props.fetchCard();
    console.log('porps', props);
  }, []);
  useEffect(() => {
    console.log('porps', props);
  });
  let bpi = props.payload?.bpi;
  console.log('bpi', bpi);
  const cardContent = () => {
    return (
      <div className="site-card-wrapper">
        <h2>{props.payload.chartName}</h2>
        <p>{props.payload.disclaimer}</p>
        <Row gutter={16}>
          <Col span={8}>
            <Card title={`${bpi?.USD.code}(${bpi?.USD.description})`} bordered={false}>
            Rate : {bpi?.USD.rate}
          
            </Card>
          </Col>

          <Col span={8}>
            <Card title={`${bpi?.EUR.code}(${bpi?.EUR.description})`} bordered={false}>
            Rate : {bpi?.EUR.rate}

            </Card>
          </Col>
          <Col span={8}>
            <Card title={`${bpi?.GBP.code}(${bpi?.GBP.description})`} bordered={false}>
                Rate : {bpi?.GBP.rate}
            </Card>
          </Col>
        </Row>
       Last Updated on : {moment(props.payload?.time?.updatedISO).format('MMMM Do YYYY, h:mm:ss a')}
      </div>
    );
  };
  return (
    <div>
      <MainLayout content={cardContent()} />
    </div>
  );
};

const mapStoreToProps = ({ Card }) => {
  console.log('state', Card);
  return {
    payload: Card.payload,
    error: Card.error,
    message: Card.message,
    changed: Card.changed,
  };
};
const mapDispatchToProps = dispatch => ({
  fetchCard: () => dispatch(actionCreator({ method: 'GET', action_type: 'FETCH_CARD' })),
});

export default connect(mapStoreToProps, mapDispatchToProps)(CardSection);
