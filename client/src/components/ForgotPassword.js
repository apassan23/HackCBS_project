import React from 'react';
import { Container, Button, Input, Form } from 'reactstrap';

class ForgotPassword extends React.Component {
  state = {
    email: ''
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    /*
        password reset actions here
    */
  };

  render() {
    return (
      <Container
        className='text-center d-flex justify-content-center align-items-center'
        style={{ height: '100vh', fontFamily: 'Rubik' }}
      >
        <div>
          <h1 className='display-2' style={{ color: '#585194' }}>
            Trouble Logging In?
          </h1>
          <div className='mt-5 d-flex justify-content-center'>
            <p
              className='text-wrap'
              style={{ width: '25rem', fontSize: '22px', color: '#8c86c2' }}
            >
              Enter the email address associated with your account
            </p>
          </div>

          <p
            className='text-wrap mt-4 text-secondary'
            style={{ fontSize: '16px' }}
          >
            We will send you a link to reset your password
          </p>

          <p className='mt-5 mb-1 text-danger' style={{ fontSize: '13px' }}>
            *Please Enter a Correct Email Address
          </p>
          <Form onSubmit={event => this.handleSubmit(event)}>
            <div className='d-flex justify-content-center'>
              <Input
                type='email'
                placeholder='Enter Email Address'
                name='email'
                className='w-75 py-4'
                style={{
                  boxShadow: '0.2px 0.2px 2.5px 0.4px rgba(0, 0, 0, 0.1)'
                }}
                onChange={event => this.handleChange(event)}
              />
            </div>
            <Button
              color='info'
              type='submit'
              className=' mt-5 px-4 py-2'
              disabled={this.state.email.length === 0}
              style={{
                boxShadow: '0.2px 0.2px 2.5px 0.4px rgba(0, 0, 0, 0.4)'
              }}
            >
              Send
            </Button>
          </Form>
        </div>
      </Container>
    );
  }
}

export default ForgotPassword;
