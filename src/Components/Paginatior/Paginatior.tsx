import React, { useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";

import type { blogList } from "../../Type/Type";
import { PAGINATION_CONSTANT } from "../../Utility/CommonContant";
import { pagination } from "../../Utility/CommonFunction";

interface PaginationProps {
  blogs: blogList[];
  onPageChange: (pagedBlogs: blogList[]) => void;
}

const Paginator = ({ blogs, onPageChange }: PaginationProps) => {
  const pageSize = PAGINATION_CONSTANT.ITEMS_PER_PAGE;
  const [currentPage, setCurrentPage] = useState(1);
  const { currentItems, pages } = pagination(blogs, currentPage, pageSize);
  useEffect(() => {
    if (blogs.length > 0) {
      onPageChange(currentItems);
    }
  }, [currentPage, blogs]);

  return (
    <Pagination className="justify-content-center mt-4">
      <Pagination.First
        onClick={() => setCurrentPage(1)}
        disabled={currentPage === 1}
      />
      <Pagination.Prev
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      />

      {Array.from({ length: pages }).map((_, index) => {
        const page = index + 1;
        return (
          <Pagination.Item
            key={page}
            active={page === currentPage}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </Pagination.Item>
        );
      })}

      <Pagination.Next
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === pages}
      />
      <Pagination.Last
        onClick={() => setCurrentPage(pages)}
        disabled={currentPage === pages}
      />
    </Pagination>
  );
};

export default Paginator;
