import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { ROUTES } from "../../Utility/CommonContant";
import Blogs from "../Blogs/Blogs";
import DestinationBlog from "../DestinationBlog/DestinationBlog";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import SignIn from "../SiginComponent/SignIn";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={ROUTES.home} />} />
      <Route path={ROUTES.login} element={<SignIn />} />
      <Route path={ROUTES.register} element={<Register />} />
      <Route path={ROUTES.home} element={<Home />} />
      <Route path={ROUTES.blogs} element={<Blogs />} />
      <Route
        path={`${ROUTES.destinationBlog}/:id`}
        element={<DestinationBlog />}
      />
      <Route path={ROUTES.notFound} element={<NotFound />} />
      <Route path={ROUTES.profile} element={<Profile />} />
    </Routes>
  );
};

export default Routing;
