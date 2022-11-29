import AuthPage from '../pages/AuthPage';
import Home from '../pages/Home';
import ProfilePage from '../pages/ProfilePage';
import SinglePostPage from '../pages/SinglePostPage';

export default [
  {
    path: "/auth",
    Component: AuthPage
  },
  {
    path: "/posts",
    Component: Home
  },
  {
    path: "/profile",
    Component: ProfilePage
  },
  {
    path: "/posts/:id",
    Component: SinglePostPage
  }
  ];
