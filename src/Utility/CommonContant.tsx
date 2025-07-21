import { Messages } from "./CommonMessages";

export const ROUTES = {
  login: "/login",
  register: "/register",
  home: "/home",
  blogs: "/blogs",
  logout: "/logout",
  destinationBlog: "/destinationBlog",
  notFound: "/notfound",
  root: "/",
  profile: "/profile",
};
export const MENUS = [
  { name: Messages.menu.home.value, link: ROUTES.home },
  { name: Messages.menu.blogs.value, link: ROUTES.blogs },
];
export const AUTHMENU = [
  { name: Messages.menu.login.value, link: ROUTES.login },
  { name: Messages.menu.logout.value, link: ROUTES.logout },
];

export const PAGINATION_CONSTANT = {
  ITEMS_PER_PAGE: 9,
};
export const RATING = [1, 2, 3, 4, 5];
