import { Router } from 'express';
import {
  createSkill,
  getAllSkills,
  getSkillById,
  updateSkill,
  deleteSkill,
} from './skills.controller';

const router = Router();
export const SkillRoutes = router;

// Define routes for skills
router.post('/', createSkill); // Create a new skill
router.get('/', getAllSkills); // Get all skills
router.get('/:id', getSkillById); // Get a skill by ID
router.put('/:id', updateSkill); // Update a skill
router.delete('/:id', deleteSkill); // Delete a skill
