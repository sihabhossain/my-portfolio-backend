import { Router } from 'express';
import {
  createProject,
  deleteProject,
  getAllProjects,
  getProjectById,
  updateProject,
} from './projects.controllers';

const router = Router();
export const ProjectsRoutes = router;

// Define routes for projects
router.post('/', createProject);
router.get('/', getAllProjects);
router.get('/:id', getProjectById);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);
