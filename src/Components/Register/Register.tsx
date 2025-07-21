import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "../../Utility/CommonContant";
import { Messages } from "../../Utility/CommonMessages";

const Register = () => {
  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const loginObj = Object.fromEntries(formData);

    const email = loginObj.email.toString();
    console.log("🚀 ~ handleLogin ~ email:", email);
    const password = loginObj.password.toString();
    console.log("🚀 ~ handleLogin ~ password:", password);
  };

  return (
    <div className="background-image d-flex justify-content-center align-items-center vh-100">
      <Container>
        <Row className="w-100">
          <Col md={{ span: 6, offset: 3 }}>
            <Card className="shadow p-4">
              <h2 className="text-center mb-4">
                {Messages.register.cardTitle.value}
              </h2>
              <Form onSubmit={handleLogin}>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>{Messages.register.emailLabel.value}</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder={Messages.register.emailLabel.value}
                    name="email"
                  />
                </Form.Group>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>{Messages.register.emailLabel.value}</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder={Messages.register.emailLabel.value}
                    name="email"
                  />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Label>
                    {Messages.register.passwordLabel.value}
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder={Messages.register.passwordLabel.value}
                    name="password"
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  {Messages.register.registerBtn.value}
                </Button>
                <p className="text-center text-muted mt-4">
                  {Messages.register.alreadyAccount.value}
                  <a
                    className="text-decoration-none"
                    onClick={() => {
                      navigate(ROUTES.login);
                    }}
                  >
                    {Messages.SignIn.loginBtn.value}
                  </a>
                  .
                </p>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
