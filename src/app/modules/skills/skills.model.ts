import { Schema, model, Document } from 'mongoose';
import { ISkill } from './skills.interface';

// Define the Skill Schema
const skillSchema = new Schema<ISkill>({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

// Create the Skill Model
const Skill = model<ISkill>('Skill', skillSchema);

export default Skill;
