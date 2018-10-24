import {Component} from "@angular/core"
import { IStudent } from "./IStudent";

@Component({
    selector:'st-student',
    templateUrl: '../Student/studentcomponent.html',
    styleUrls: ['../Student/StudentComponent.css']
})
export class StudentComponent {   
    stud:IStudent;
    studentList:IStudent[];
    company:string="Swabhav Techlabs";
    
    constructor(){
        this.stud={
            rollNo:101,
            firstName:"var",
            lastName:"asd",
            cgpa:45
        }

        this.studentList=[{rollNo:102,firstName:"asd",lastName:"xyz",cgpa:45},
                            {rollNo:103,firstName:"dsdadd",lastName:"saxax",cgpa:55},
                            {rollNo:104,firstName:"jkjkhn",lastName:"xyz",cgpa:50},
                            {rollNo:105,firstName:"ahbgyu",lastName:"xyz",cgpa:45}]
    }

    count=0;
    increment=()=>{
        this.count++;
    }
}