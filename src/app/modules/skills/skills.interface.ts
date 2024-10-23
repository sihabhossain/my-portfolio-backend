// Define interface for a Skill Document
export interface ISkill extends Document {
  name: string;
  level: string;
  description?: string;
}
