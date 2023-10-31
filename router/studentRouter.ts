import { Router } from "express";
import {
  addStudentDetails,
  deleteStudentDetail,
  getStudentDetails,
  getStudentbyDetail,
  updateStudentDetail,
} from "../controller/studentController";

const router: Router = Router();

router.route("/addStudentDetail").post(addStudentDetails);
router.route("/getStudentDetail").get(getStudentDetails);
router.route("/getStudentByDetail").get(getStudentbyDetail);
router.route("/updateStudentDetail/:studentID").patch(updateStudentDetail);
router.route("/deleteStudentDetail/:studentID").delete(deleteStudentDetail);

export default router;