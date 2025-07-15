import "./Home.css";

import React, { useEffect, useState } from "react";
import { Button, Carousel,Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import type { blogList } from "../../Type/Type";
import { fetchBlogs } from "../../Utility/Api";
import { ROUTES } from "../../Utility/CommonContant";
import { Messages } from "../../Utility/CommonMessages";
import BlogCard from "../BlogCard/BlogCard";
const HomePage = () => {
  const images = [
    "https://picsum.photos/seed/transylvania_2/2930/700",
    "https://picsum.photos/seed/transylvania_3/2930/700",
    "https://picsum.photos/seed/transylvania_4/2930/700",
    "https://picsum.photos/seed/transylvania_5/2930/700",
  ];

  const [featuredDestination, setFeaturedDestination] = useState<blogList[]>(
    []
  );
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs().then((res) => {
      setFeaturedDestination(res.slice(0, 3));
    });
  }, []);
  const handleGoToBLogs = () => {
    navigate(ROUTES.blogs);
  };
  return (
    <>
      <Container className="text-center my-5">
        <h1 className="display-4 fw-bold">{Messages.home.heading.value}</h1>
        <p className="lead text-muted">{Messages.home.description.value}</p>
        <Button variant="primary" size="lg" onClick={handleGoToBLogs}>
          {Messages.home.exploreBtn.value}
        </Button>
      </Container>

      <div>
        <Carousel interval={3000}>
          {images.map((imgUrl, index) => (
            <Carousel.Item key={index}>
              <img src={imgUrl} className=".img-size" />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <Container className="mb-5">
        <h2 className="mb-4 text-center">
          {Messages.home.featuredDestinations.value}
        </h2>
        <Row>
          {featuredDestination.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </Row>
      </Container>

      <footer className="bg-dark text-light text-center py-4">
        <Container>
          <p className="mb-1">{Messages.footer.footerDescription.value}</p>
        </Container>
      </footer>
    </>
  );
};

export default HomePage;
