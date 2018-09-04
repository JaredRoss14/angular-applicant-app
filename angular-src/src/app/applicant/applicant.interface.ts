export interface Applicant{
  _id: string;
  firstName: string;
  lastName: string; 
  position: string;
  date: string;
  experience: number;
  phoneNumber: number;
  availability: Array<any>;
  questions: Array<any>;
  favorited: boolean;
}