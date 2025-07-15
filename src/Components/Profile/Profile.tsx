import "./Profile.css";

import React, { useEffect, useState } from "react";
import { Card, Col, Container, Image, ListGroup,Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import type { User } from "../../Type/Type";
import { Messages } from "../../Utility/CommonMessages";

const Profile = () => {
  const location = useLocation().state;
  const user = location?.user;

  const dummmyData = {
    phone: "+1 (555) 123-4567",
    avatar:
      "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ratings: [
      { place: "Paris", rating: 4 },
      { place: "New York", rating: 5 },
      { place: "Tokyo", rating: 3 },
    ],
    comments: [
      { place: "Paris", comment: "Amazing city with stunning architecture!" },
      { place: "New York", comment: "Loved the energy and food!" },
    ],
  };
  const [userInfo, setUser] = useState<User>({
    ...user,
    ...dummmyData,
  });
  useEffect(() => {
    if (user) {
      setUser({ ...user, ...dummmyData });
    }
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Row>
            <Col md={11.5} className="text-center mb-3">
              <Image
                src={userInfo.avatar}
                roundedCircle
                className="img-class mt-2"
              />
              <Card className="mt-4">
                <Card.Body>
                  <h4 className="mt-3">{userInfo.username}</h4>
                  <p className="text-muted">{userInfo.email}</p>
                  <p className="mb-1">
                    <strong>{Messages.profile.phone.value}</strong>{" "}
                    {userInfo.phone}
                  </p>
                </Card.Body>
              </Card>

              <Card className="mt-4">
                <Card.Body>
                  <h5 className="mb-3">
                    {Messages.profile.ratingsGiven.value}
                  </h5>
                  <ListGroup className="mb-4">
                    {userInfo.ratings.map((item, index) => (
                      <ListGroup.Item key={index}>
                        <strong>{item.place}</strong>{" "}
                        {"⭐".repeat(item.rating).padEnd(5, "☆")}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
              <Card className="mt-4">
                <Card.Body>
                  <h5 className="mb-3">
                    {Messages.profile.commentsPosted.value}
                  </h5>
                  <ListGroup>
                    {userInfo.comments.map((item, index) => (
                      <ListGroup.Item key={index}>
                        <strong>{item.place}:</strong> {item.comment}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
