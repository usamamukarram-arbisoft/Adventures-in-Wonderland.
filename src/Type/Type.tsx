export interface usersInterface {
  password: string;
  email: string;
}
export interface User {
  email: string;
  password: string;
  username: string;
}
export interface UserState {
  user: User | null;
  isLoggedIn: boolean;
}
export interface blogList {
  id: number;
  name: string;
  description: string;
  location: string;
  attractions: string[];
  famous_for: string;
  images: string[];
  best_time_to_visit: string;
  visited_by: string;
  rating: number;
  comments: string[];
}

export type blogProps = {
  blog: {
    id: number;
    name: string;
    description: string;
    location: string;
    attractions: string[];
    famous_for: string;
    images: string[];
    best_time_to_visit: string;
    visited_by: string;
    rating: number;
    comments: string[];
  };
};
export interface Destination {
  name: string;
  description: string;
  location: string;
  attractions: string[];
  famous_for: string;
  images: string[];
  best_time_to_visit: string;
  visited_by: string;
  rating: number;
  comments: string[];
}
export interface User {
  username: string;
  email: string;
  phone: string;
  ratings: { place: string; rating: number }[];
  comments: { place: string; comment: string }[];
  avatar: string;
}
export type MenuItem = {
  name: string;
  link: string;
};
