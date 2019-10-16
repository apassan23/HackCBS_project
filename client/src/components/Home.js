import React from 'react';
import AppNavbar from './AppNavbar';
import SignUp from './SignUp';

const Home = () => {
  return (
    <React.Fragment>
      <AppNavbar />
      <div className='container-fluid' id='wrapper'>
        <SignUp />
      </div>
    </React.Fragment>
  );
};

export default Home;
