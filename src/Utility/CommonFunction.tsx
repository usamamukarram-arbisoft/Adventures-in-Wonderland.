import type { blogList } from "../Type/Type";

export const pagination = (
  items: blogList[],
  currentPage: number,
  pageSize: number
) => {
  const starting = (currentPage - 1) * pageSize;
  const ending = starting + pageSize;
  const displayItemsPerPage = items.slice(starting, ending);
  const totalPages = Math.ceil(items.length / pageSize);

  return {
    currentItems: displayItemsPerPage,
    pages: totalPages,
  };
};
