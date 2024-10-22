import { Router } from 'express';
import {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} from './blogs.controller';

const router = Router();
export const BlogRoutes = router;

// Define routes for blogs
router.post('/', createBlog); // Create a new blog
router.get('/', getAllBlogs); // Get all blogs
router.get('/:id', getBlogById); // Get a blog by ID
router.put('/:id', updateBlog); // Update a blog
router.delete('/:id', deleteBlog); // Delete a blog
