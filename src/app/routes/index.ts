import express from 'express';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { UserRoutes } from '../modules/User/user.route';
import { ProjectsRoutes } from '../modules/projects/projects.route';
import { experienceRoutes } from '../modules/workexp/experience.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/projects',
    route: ProjectsRoutes,
  },
  {
    path: '/experience',
    route: experienceRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
