import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

import type { RootState } from "../../Store";
import type { blogList } from "../../Type/Type";
import { fetchBlogs } from "../../Utility/Api";
import { Messages } from "../../Utility/CommonMessages";
import BlogCard from "../BlogCard/BlogCard";
import Paginatior from "../Paginatior/Paginatior";

const Blogs = () => {
  const [blogs, setBlogs] = useState<blogList[]>([]);
  const [currentItems, setCurrentItems] = useState<blogList[]>([]);
  const searchTerm = useSelector(
    (state: RootState) => state.Search.searchQuery
  );

  useEffect(() => {
    fetchBlogs().then((res) => {
      if (searchTerm) {
        const filterBlogs = res.filter((blog) =>
          blog.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setBlogs(filterBlogs);
      } else {
        setBlogs(res);
      }
    });
  }, [searchTerm]);
  const setPagedBlogs = (updatedList: blogList[]) => {
    setCurrentItems(updatedList);
  };

  return (
    <>
      <Container className="mt-5">
        <h2 className="mb-4">{Messages.blogCard.blogsHeading.value}</h2>

        <Row>
          {currentItems.map((blog: blogList) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </Row>
      </Container>
      <Paginatior blogs={blogs} onPageChange={setPagedBlogs} />
    </>
  );
};

export default Blogs;
