import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { Messages } from "../../Utility/CommonMessages";

const NotFound = () => {
  return (
    <Container className="text-center mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="display-1 fw-bold">404</h1>
          <p className="fs-2 fw-medium mt-4">{Messages.notFound.title.value}</p>
          <p className="mt-4 mb-5">{Messages.notFound.message.value}</p>
          <a
            href="/"
            className="btn btn-light fw-semibold rounded px-4 py-2 custom-btn"
          >
            {Messages.menu.home.value}
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
