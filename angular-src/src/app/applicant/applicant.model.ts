export class ApplicantClass {
  public _id: string;
  public firstName: string;
  public lastName: string;
  public position: string;
  public date: string;
  public experience: number;
  public phoneNumber: number;
  public availability: Array<any>;
  public questions: Array<any>;
  public favorited: boolean;

  constructor(_id: string, firstName: string, lastName: string, position: string, date: string, experience: number, phoneNumber: number, availability: Array<any>, questions: Array<any>, favorited: boolean) {
    this._id = _id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.date = date;
    this.experience = experience;
    this.phoneNumber = phoneNumber;
    this.availability = availability;
    this.questions = questions;
    this.favorited = favorited
  }
}