import "./search.css";

import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { ROUTES } from "../../Utility/CommonContant";
import { clearSearch, setSearchQuery } from "./SearchSlice";
const Search = () => {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const searchQuery = (e: React.FormEvent<HTMLFormElement>) => {
    if (location !== ROUTES.blogs) {
      navigate(ROUTES.blogs);
    }
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const searchQuery = formData.get("search") as string;
    dispatch(setSearchQuery(searchQuery));
    setQuery(searchQuery);
  };
  const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const form = e.currentTarget.closest("form") as HTMLFormElement | null;

    if (form) {
      const searchInput = form.elements.namedItem(
        "search"
      ) as HTMLInputElement | null;
      if (searchInput) {
        searchInput.value = "";
        setQuery("");
        dispatch(clearSearch());
      }
    }
  };
  useEffect(() => {
    if (location !== ROUTES.blogs) {
      const input = document.querySelector(
        'input[name="search"]'
      ) as HTMLInputElement | null;

      if (input) {
        input.value = "";
        setQuery("");
        dispatch(clearSearch());
      }
    }
  }, [location]);
  return (
    <Form
      className="d-flex justify-content-center me-auto"
      onSubmit={searchQuery}
    >
      <div className="position-relative" style={{ width: "280px" }}>
        <Form.Control
          type="search"
          placeholder="Search"
          className="pe-5"
          name="search"
          aria-label="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <Button
            variant="link"
            className="clearbtn"
            onClick={handleClear}
            aria-label="Clear"
          >
            <i className="bi bi-x" />
          </Button>
        )}
      </div>
      <Button variant="outline-dark" type="submit" className="ms-2">
        <i className="bi bi-search" />
      </Button>
    </Form>
  );
};

export default Search;
