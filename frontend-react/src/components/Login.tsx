import './Login.css'

import { Card, Form, Button } from 'react-bootstrap'

const Login = () => {
  return (
    <>
      <Card style={{borderRadius: '5px'}}>
        <Card.Body>
          <h1 className="text-center mb-4">Log In</h1>
          <Form className="col-form-label-lg" id="login-form">
            <Form.Group className="mb-3" id="email">
              <Form.Label>
                Email
              </Form.Label>
              <Form.Control type="email" placeholder="example@email.com" required></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" id="password">
              <Form.Label>
                Password
              </Form.Label>
              <Form.Control type="password" required></Form.Control>
            </Form.Group>
            <Button className="w-100 mt-2 text-center" type="submit">Log In</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <a href="">Sign Up</a>
      </div>
    </>
  )
}

export default Login
