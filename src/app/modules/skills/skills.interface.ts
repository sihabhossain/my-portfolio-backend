// Define interface for a Skill Document
export interface ISkill extends Document {
  name: string;
  level: string; // e.g., Beginner, Intermediate, Advanced
  img: string;
  description?: string; // Optional description of the skill
}
