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
    const { email, password } = this.state;
    return (
      <Container id='login-container'>
        <Row>
          <Col>
            <div
              className='d-flex flex-column justify-content-center align-items-center'
              id='login-card-wrapper'
            >
              <Card className='login-card' id='main-login'>
                <CardBody>
                  <h2 className='card-title text-center dancing-font'>
                    Log In
                  </h2>
                  <Form
                    method='post'
                    id='login-form'
                    className='d-flex justify-content-center align-items-center'
                  >
                    <div id='log-form-groups'>
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
                          href='/login/forgot_pwd'
                          style={{ color: 'orangered', fontSize: '12px' }}
                        >
                          Trouble Logging in?
                        </CardLink>
                      </FormGroup>
                      <FormGroup className='w-100 text-center mt-5'>
                        <Button
                          type='submit'
                          color='success'
                          className='btn-block'
                          disabled={email.length === 0 || password.length === 0}
                        >
                          Log In
                        </Button>
                      </FormGroup>
                    </div>
                  </Form>
                </CardBody>
              </Card>
              <Card className='login-card text-center mt-3'>
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
