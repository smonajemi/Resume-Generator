import ErrorPage from '../pages/Error'
import HomePage from '../pages/Home'
import LoginPage from '../pages/Login'

interface RouteType {
  path: string;
  component: any;
  name: string;
  protected: boolean;
}

const routes: RouteType[] = [
  {
    path: "*",
    component: ErrorPage,
    name: "Error Page",
    protected: false,
  },
  {
    path: "/",
    component: HomePage,
    name: "Landing Page",
    protected: true,
  },
  {
    path: "/Login",
    component: LoginPage,
    name: "Login Page",
    protected: true,
  },
];

export default routes;