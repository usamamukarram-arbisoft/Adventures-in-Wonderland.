import "./SiginIn.css";

import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import type { RootState } from "../../Store";
import { loginRequest } from "../../Utility/Api";
import { ROUTES } from "../../Utility/CommonContant";
import { Messages } from "../../Utility/CommonMessages";
import { loginUser } from "./SiginSlice";

const SignIn = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.Auth.isLoggedIn);
  useEffect(() => {
    if (isLoggedIn) {
      navigate(ROUTES.home);
    }
  }, [isLoggedIn]);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const loginObj = Object.fromEntries(formData);

    const email = loginObj.email.toString();
    const password = loginObj.password.toString();

    if (email === "" || password === "") {
      setError("Please enter email and password");
      return;
    }
    if (email && password) {
      loginRequest({ email, password })
        .then((user) => {
          dispatch(loginUser(user));
        })
        .catch((error) => {
          setError(error);
        });
      setError("");
    }
  };

  return (
    <div className="background-image d-flex justify-content-center align-items-center vh-100">
      <Container>
        <Row className="w-100">
          <Col md={{ span: 6, offset: 3 }}>
            <Card className="shadow p-4">
              <h2 className="text-center mb-4">
                {Messages.SignIn.cardTitle.value}
              </h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleLogin}>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>{Messages.SignIn.emailLabel.value}</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder={Messages.SignIn.emailLabel.value}
                    name="email"
                  />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Label>{Messages.SignIn.passwordLabel.value}</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder={Messages.SignIn.passwordLabel.value}
                    name="password"
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  {Messages.SignIn.loginBtn.value}
                </Button>
                <p className="text-center text-muted mt-4">
                  {Messages.SignIn.signupText.value}
                  <a
                    className="text-decoration-none"
                    onClick={() => {
                      navigate(ROUTES.register);
                    }}
                  >
                    {Messages.SignIn.signupLink.value}
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

export default SignIn;
