import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div
      className='container-fluid'
      id='error'
      style={{ backgroundColor: '#dbdbda' }}
    >
      <div id='error-text'>
        <div style={{ fontSize: '170px' }} className='text-secondary'>
          4<span className='text-warning err404'>0</span>4
        </div>
        <div className='lead text-secondary mt-3'>
          Oops! We can't find the page you're looking for
        </div>
        <hr className='w-25 mt-5' />
        <Link to='/' className='btn btn-success mt-4'>
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error404;
