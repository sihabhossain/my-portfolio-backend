import { Schema, model, Document } from 'mongoose';
import { IProject } from './projects.interface';

// Define the Project Schema
const projectSchema = new Schema<IProject>({
  title: { type: String, required: true },
  des: { type: String, required: true },
  img: { type: String, required: true },
  iconLists: { type: [String], required: true },
  link: { type: String, required: true },
});

// Create the Project Model
const Project = model<IProject>('Project', projectSchema);

export default Project;
