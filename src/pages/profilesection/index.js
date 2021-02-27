import React, { useEffect, useState } from 'react';
import { actionCreator } from '../../reducers/actionCreator';
import { store } from '../../reducers/configureStore';
import { connect } from 'react-redux';
import { Col, Row } from 'antd';
import MainLayout from 'pages';
import ReactCountryFlag from 'react-country-flag';

import './style.scss';
const ProfileSection = props => {
  const [userInfo, setUserInfo] = useState('');
  const [userImage, setUserImage] = useState('');

  useEffect(() => {
    props.fetchUser();
  }, []);

  useEffect(() => {
    console.log('props', props.payload);
    console.log('state', userInfo);

    setUserInfo(props.payload);
    setUserImage(props.payload.picture);
  });
  const profileSection = () => {
    return (<div className="profile-main">
        Profile Section
      <div className="profile-section">
        <Row>
          <Col xs={24} xl={24}>
            {userInfo.name && (
              <div className="profile-left">
               
                <div>
                  <img className="profile-image" src={userImage?.large} />
                </div>
                <div className="user-info">
                <h3>{`${userInfo?.name?.title}.${userInfo?.name?.first} ${userInfo?.name?.last}`}</h3>
                  <p><b>Age:</b>{userInfo.dob.age}</p>
                  <p><b>Email:</b> {userInfo?.email}</p>
                  <p><b>Phone:</b>{userInfo?.phone} </p>
                  <p><b>Cell</b>:{userInfo?.cell}</p>
                  </div>

                  <div className="location">
                    <p>
                    <b>Street :</b> {userInfo?.location.street.number} {userInfo?.location.street.name}
                    </p>
                    <p><b>City:</b>{userInfo?.location.city}</p>

                    <p><b>State:</b>{userInfo?.location.state}</p>
                    <p><b>Country:</b>{userInfo?.location.country}</p>
                    <p><b>Postcode:</b>{userInfo?.location.postcode}</p>
                    <p>
                      {' '}
                      <b>Nation:</b> <ReactCountryFlag countryCode={userInfo?.nat} />
                    </p>
                  </div>
              </div>
            )}
          </Col>
        </Row>
      </div>
    </div>

    );
  };

  return (
    <div>
      <MainLayout content={profileSection()} />
    </div>
  );
};

const mapStoreToProps = ({ Users }) => {
  console.log('state', Users);
  return {
    payload: Users.payload,
    error: Users.error,
    message: Users.message,
    changed: Users.changed,
  };
};
const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(actionCreator({ method: 'GET', action_type: 'FETCH_USER' })),
});

export default connect(mapStoreToProps, mapDispatchToProps)(ProfileSection);
