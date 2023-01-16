import ErrorPage from '../pages/Error'
import HomePage from '../pages/Home'


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
];

export default routes;