import ErrorPage from '../pages/Error'
import HomePage from '../pages/Home'
import LoginPage from '../pages/Login'
import SignupPage from '../pages/Signup'

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
    path: "/login",
    component: LoginPage,
    name: "Login Page",
    protected: false,
  },
  {
    path: "/signup",
    component: SignupPage,
    name: "Signup Page",
    protected: false,
  },
];

export default routes;