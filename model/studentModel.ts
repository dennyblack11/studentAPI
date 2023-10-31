import { ObjectId } from "mongodb";

export class studentModel {
  public _id: ObjectId;
  public name: string;
  public score: number;
  public courses: Array<string>;

  constructor(name: string, score: number, courses: Array<string>) {
    this._id = new ObjectId();
    this.name = name;
    this.score = score;
    this.courses = courses;
  }
}