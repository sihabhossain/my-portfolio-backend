import { Schema, model, Document } from 'mongoose';
import { IBlog } from './blogs.interface';

// Define the Blog Schema
const blogSchema = new Schema<IBlog>({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

// Create the Blog Model
const Blog = model<IBlog>('Blog', blogSchema);

export default Blog;
