import React from 'react';
import {
  Container,
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Input,
  Col,
  Row,
  CardLink,
  Alert
} from 'reactstrap';

class SignUp extends React.Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    isMatch: true
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { password, confirmPassword } = this.state;

    if (password === confirmPassword) this.setState({ isMatch: true });
    else this.setState({ isMatch: false });

    /*
      Call the reducer here to
       make changes to db
    */
  };

  render() {
    const { email, password, confirmPassword } = this.state;
    return (
      <Container id='main-wrapper'>
        <Row
          className='d-flex justify-content-start align-items-center'
          id='main'
        >
          <Col
            md='6'
            className='order-md-1 d-flex justify-content-start text-center'
            id='headline-text'
          >
            <p className='text-white display-4 dancing-font'>
              A Dynamic Portal for your Medical Report
            </p>
          </Col>
          <Col md='6'>
            <Card id='card'>
              <CardBody>
                <h3 className='card-title text-center dancing-font'>Sign Up</h3>
                <Form
                  method='post'
                  id='sign-form'
                  className='d-flex flex-column justify-content-center align-items-center'
                  onSubmit={event => this.handleSubmit(event)}
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
                    <FormGroup>
                      <Input
                        type='password'
                        name='confirmPassword'
                        placeholder='Confirm Password'
                        onChange={event => this.handleChange(event)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Button
                        color='primary'
                        className='btn-block mt-5'
                        disabled={
                          email.length == 0 ||
                          password.length == 0 ||
                          confirmPassword.length == 0
                        }
                      >
                        Sign Up
                      </Button>
                      {!this.state.isMatch ? (
                        <Alert
                          color='danger'
                          className='error-alert text-center mt-3'
                        >
                          Passwords do not match!
                        </Alert>
                      ) : null}
                    </FormGroup>
                  </div>
                </Form>
              </CardBody>
            </Card>
            <Card id='card' className='text-center mt-3'>
              <CardBody>
                Already have an Account?{' '}
                <CardLink href='/login'>Login</CardLink>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignUp;
