import React from "react";
import { Badge, Button,Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import type { blogProps } from "../../Type/Type";
import { ROUTES } from "../../Utility/CommonContant";
import { Messages } from "../../Utility/CommonMessages";
const BlogCard = ({ blog }: blogProps) => {
  const navigate = useNavigate();
  const handleGoToDetails = () => {
    navigate(`${ROUTES.destinationBlog}/${blog.id}`, { state: { blog } });
  };

  return (
    <Col md={6} lg={4} key={blog.id} className="mb-4">
      <Card className="h-100 shadow-sm">
        <Card.Img variant="top" src={blog.images?.[0]} alt={blog.name} />
        <Card.Body>
          <Card.Title>{blog.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {blog.location}
          </Card.Subtitle>
          <Card.Text className="text-truncate">{blog.description}</Card.Text>

          <p>
            <strong>{Messages.blogCard.visitedBy.value}</strong>{" "}
            {blog.visited_by}
          </p>
          <p>
            <strong>{Messages.blogCard.Rating.value}</strong>{" "}
            {"⭐".repeat(blog.rating).padEnd(5, "☆")}
          </p>

          <p>
            <strong>{Messages.blogCard.bestTime.value}</strong>{" "}
            {blog.best_time_to_visit}
          </p>

          <div className="mb-2">
            {blog.attractions.slice(0, 3).map((attraction, index) => (
              <Badge bg="info" className="me-1" key={index}>
                {attraction}
              </Badge>
            ))}
          </div>

          <Button variant="primary" size="sm" onClick={handleGoToDetails}>
            {Messages.blogCard.readMore.value}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BlogCard;
