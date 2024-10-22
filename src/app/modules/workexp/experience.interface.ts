// Define interface for an Experience Document
export interface IExperience extends Document {
  title: string;
  span: string;
  desc: string;
  className: string;
  thumbnail: string;
  company: string;
}
