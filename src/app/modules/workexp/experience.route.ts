import { Router } from 'express';
import {
  createExperience,
  getAllExperiences,
  getExperienceById,
  updateExperience,
  deleteExperience,
} from './experience.controller';

const router = Router();
export const experienceRoutes = router;

// Define routes for experiences
router.post('/', createExperience); // Create a new experience
router.get('/', getAllExperiences); // Get all experiences
router.get('/:id', getExperienceById); // Get an experience by ID
router.put('/:id', updateExperience); // Update an experience
router.delete('/:id', deleteExperience); // Delete an experience
