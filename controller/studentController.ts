import { Request, Response } from "express";
import { statusCode } from "../utils/statusCode";
import { client, db } from "../utils/dbConfig";
import { studentModel } from "../model/studentModel";
import { ObjectId } from "mongodb";

export const addStudentDetails = async (req: Request, res: Response) => {
  try {
    await client.connect();
    const { name, score, courses } = req.body;
    const student = new studentModel(name, score, courses);
    console.log(name);

    await db.insertOne(student);

    res.status(statusCode.OK).json({
      message: "Added successfully",
      student,
    });
  } catch (err) {
    console.log(err);

    res.status(statusCode.BAD_REQUEST).json({
      message: "Error",
      error: err,
    });
  }
};

export const getStudentDetails = async (req: Request, res: Response) => {
  try {
    await client.connect();
    const student = await db.find().toArray();

    res.status(statusCode.OK).json({
      message: "All students gotten successfully",
      student,
    });
  } catch (err) {
    console.log(err);

    res.status(statusCode.BAD_REQUEST).json({
      message: "Error",
      error: err,
    });
  }
};

export const updateStudentDetail = async (req: Request, res: Response) => {
  try {
    await client.connect();

    const { studentID } = req.params;

    const { name, score, courses } = req.body;

    const student = await db.updateOne(
      { _id: new ObjectId(studentID) },
      { $set: { name, score, courses } }
    );

    res.status(statusCode.OK).json({
      message: "Updated successfully",
      student,
    });
  } catch (err) {
    console.log(err);

    res.status(statusCode.BAD_REQUEST).json({
      message: "Error",
      error: err,
    });
  }
};

export const deleteStudentDetail = async (req: Request, res: Response) => {
  try {
    await client.connect();

    const { studentID } = req.params;

    const student = await db.deleteOne({ _id: new ObjectId(studentID) });

    res.status(statusCode.OK).json({
      message: "Deleted successfully",
      student,
    });
  } catch (err) {
    console.log(err);

    res.status(statusCode.BAD_REQUEST).json({
      message: "Error",
      error: err,
    });
  }
};

export const getStudentbyDetail = async (req: Request, res: Response) => {
  try {
    await client.connect();

    const { name, course, score } = req.body;

    if (name) {
      let student = await db.find({ name }).toArray();
      res.status(statusCode.OK).json({
        message: "Student gotten",
        student,
      });
    } else if (course) {
      let student = await db.find({ course }).toArray();
      res.status(statusCode.OK).json({
        message: "Student gotten",
        student,
      });
    } else if (score) {
      let student = await db.find({ score }).toArray();
      res.status(statusCode.OK).json({
        message: "Student gotten",
        student,
      });
    } else if (score && course && name) {
      let student = await db.find({ name, course, score }).toArray();
      res.status(statusCode.OK).json({
        message: "Student gotten",
        student,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(statusCode.BAD_REQUEST).json({
      message: "",
    });
  }
};