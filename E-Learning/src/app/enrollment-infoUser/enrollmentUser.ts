import { Course } from "../course-info/course";
import { Student } from "../student-info/student";
import { Trainer } from "../trainer-info/trainer";

export class EnrollmentUser{
    enrollmentId:string="";
    startDate: Date | undefined;
    endDate: Date | undefined;
    score:number=0;
    status:string='';
    studentObj!:Student;
    trainerObj!:Trainer;
    courseObj!:Course;

}