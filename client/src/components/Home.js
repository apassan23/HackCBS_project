import React from 'react';
import AppNavbar from './AppNavbar';
import SignUp from './SignUp';

const Home = () => {
  return (
    <React.Fragment>
      <div className='container-fluid' id='wrapper'>
        <AppNavbar />
        <SignUp />
      </div>
    </React.Fragment>
  );
};

export default Home;
