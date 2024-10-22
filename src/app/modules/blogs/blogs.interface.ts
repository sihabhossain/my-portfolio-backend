// Define interface for a Blog Document
export interface IBlog extends Document {
  title: string;
  content: string;
  author: string;
  date: Date;
  thumbnail: string;
}
