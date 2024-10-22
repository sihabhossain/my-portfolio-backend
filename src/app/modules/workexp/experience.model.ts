import { Schema, model, Document } from 'mongoose';
import { IExperience } from './experience.interface';

const experienceSchema = new Schema<IExperience>({
  title: { type: String, required: true },
  span: { type: String, required: true },
  desc: { type: String, required: true },
  className: { type: String, required: true },
  thumbnail: { type: String, required: true },
  company: { type: String, required: true },
});

// Create the Experience Model
const Experience = model<IExperience>('Experience', experienceSchema);

export default Experience;
