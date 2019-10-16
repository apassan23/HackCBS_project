import React from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Input,
  Card,
  CardBody,
  CardLink,
  Form,
  FormGroup
} from 'reactstrap';

class Login extends React.Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    /*
        reducer actions
    */
  };

  componentWillMount() {
    document.body.style.backgroundColor = 'whitesmoke';
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = 'white';
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div
              className='d-flex flex-column justify-content-center align-items-center'
              id='login-card-wrapper'
            >
              <Card id='login-card' style={{ height: '45%' }}>
                <CardBody>
                  <h2 className='card-title text-center dancing-font'>
                    Log In
                  </h2>
                  <Form
                    method='post'
                    id='login-form'
                    className='d-flex justify-content-center align-items-center'
                  >
                    <div id='form-groups'>
                      <FormGroup>
                        <Input
                          type='email'
                          name='email'
                          placeholder='Email'
                          onChange={event => this.handleChange(event)}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Input
                          type='password'
                          name='password'
                          placeholder='Password'
                          onChange={event => this.handleChange(event)}
                        />
                      </FormGroup>
                      <FormGroup className='d-flex justify-content-end'>
                        <CardLink
                          href=''
                          style={{ color: 'orangered', fontSize: '12px' }}
                        >
                          Trouble signing in?
                        </CardLink>
                      </FormGroup>
                      <FormGroup className='w-100 text-center'>
                        <Button
                          type='submit'
                          color='success'
                          className='btn-block'
                        >
                          Log In
                        </Button>
                      </FormGroup>
                      <div id='alternate' className='w-100'>
                        <p className='or'>OR</p>
                        <Button
                          color='primary'
                          type='button'
                          className='btn-block'
                          id='google-btn'
                        >
                          <span className='google-logo mr-3'>
                            <i className='fab fa-google'></i>
                          </span>
                          Log in from Google
                        </Button>
                      </div>
                    </div>
                  </Form>
                </CardBody>
              </Card>
              <Card id='login-card' className='text-center mt-3'>
                <CardBody>
                  Don't have an Account?{' '}
                  <CardLink href='/' style={{ color: 'orchid' }}>
                    Sign Up
                  </CardLink>
                </CardBody>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
