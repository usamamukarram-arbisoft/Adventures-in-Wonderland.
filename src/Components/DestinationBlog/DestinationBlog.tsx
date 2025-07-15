import "./DestinationBlog.css";

import React, { useState } from "react";
import {
  Button,
  Card,
  Carousel,
  Col,
  Container,
  ListGroup,
  Row,
} from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

import type { RootState } from "../../Store";
import type { Destination } from "../../Type/Type";
import { RATING, ROUTES } from "../../Utility/CommonContant";
import { Messages } from "../../Utility/CommonMessages";

const DestinationBlog = () => {
  const location = useLocation().state;
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state: RootState) => state.Auth.isLoggedIn);
  const destinationDetail: Destination = location?.blog;
  const [comments, setComments] = useState<string[]>(
    destinationDetail.comments
  );
  const [rating, setRating] = useState<number>(destinationDetail.rating);
  if (!destinationDetail) return <Navigate to={ROUTES.notFound} />;

  const handleAddComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isLoggedIn) {
      navigate(ROUTES.login);
    } else {
      const formData = new FormData(e.target as HTMLFormElement);
      const commentObj = Object.fromEntries(formData);
      const newComment = commentObj.comment.toString();

      if (newComment) {
        setComments((prevComments) => [...prevComments, newComment]);
        (e.target as HTMLFormElement).reset();
      }
    }
  };
  const handleRating = (rating: number) => {
    if (!isLoggedIn) {
      navigate(ROUTES.login);
    } else {
      setRating(rating);
    }
  };
  return (
    <Container className="mt-5">
      <h2 className="mb-4">{destinationDetail.name}</h2>

      <Row>
        <Col md={8}>
          <Carousel className="mb-4">
            {destinationDetail.images.map((imgUrl, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={imgUrl}
                  alt={`Image ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>
                {Messages.blogDestination.description.value}
              </Card.Title>
              <Card.Text>{destinationDetail.description}</Card.Text>
              <Card.Text>
                <strong>{Messages.blogDestination.location.value}</strong>{" "}
                {destinationDetail.location}
              </Card.Text>
              <Card.Text>
                <strong>{Messages.blogDestination.bestTime.value}</strong>{" "}
                {destinationDetail.best_time_to_visit}
              </Card.Text>
              <Card.Text>
                <strong>{Messages.blogDestination.visitedBy.value}</strong>{" "}
                {destinationDetail.visited_by}
              </Card.Text>
              <Card.Text>
                <strong>{Messages.blogDestination.rating.value}</strong>{" "}
                {RATING.map((num) => (
                  <span
                    className="rating"
                    key={num}
                    onClick={() => handleRating(num)}
                  >
                    {num <= rating ? "⭐" : "☆"}
                  </span>
                ))}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>
                {Messages.blogDestination.famousFor.value}
              </Card.Title>
              <Card.Text>{destinationDetail.famous_for}</Card.Text>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>
                {Messages.blogDestination.attractions.value}
              </Card.Title>
              <ListGroup variant="flush">
                {destinationDetail.attractions.map((attraction, index) => (
                  <ListGroup.Item key={index}>{attraction}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title>{Messages.blogDestination.comments.value}</Card.Title>
              <ListGroup variant="flush">
                {comments.map((comment, index) => (
                  <ListGroup.Item key={index}>{comment}</ListGroup.Item>
                ))}
              </ListGroup>

              <Row className="mt-3">
                <Form onSubmit={handleAddComment}>
                  <FloatingLabel
                    controlId="floatingTextarea2"
                    label={Messages.blogDestination.commentLabel.value}
                  >
                    <Form.Control
                      as="textarea"
                      placeholder={
                        Messages.blogDestination.commentsPlaceholder.value
                      }
                      style={{ height: "100px" }}
                      name="comment"
                    />
                  </FloatingLabel>

                  <Button variant="primary" type="submit" className="mt-3">
                    {Messages.blogDestination.commentBtn.value}
                  </Button>
                </Form>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DestinationBlog;
