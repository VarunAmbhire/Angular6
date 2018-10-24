import { Component } from "@angular/core";
import { StudentApiService } from "./StudentApiService";

@Component({
    selector:"st-api",
    templateUrl:"StudentApiComponent.html"
})

export class StudentApiComponent{
   studentData:any
   rollNo:number;
    name:string;
    age:number;
    email:string;
    date:string
    isMale:boolean
    updateDisable:boolean
    addDisable:boolean
  
    constructor(private StudApi:StudentApiService){
        StudApi.getData()
            .then(res=>
                {this.studentData=JSON.parse(res._body)
         })     
         this.updateDisable=true
        //  this.addDisable=true
    }

    add=()=>{
        let data:dataSet={
            rollNo : this.rollNo,
            name : this.name,
            age : this.age,
            email : this.email,
            date : this.date,
            isMale : this.isMale
        }

        this.StudApi.postData(data).then(()=>{this.getMethod()})            
        this.cleanForm();        
    }

    edit=(student)=>{
        this.rollNo=student.rollNo
        this.name=student.name
        this.age=student.age
        this.email=student.email
        this.date=student.date
        this.isMale=student.isMale  

        this.updateDisable=false
    }

    update=()=>{
        let data:dataSet={
            rollNo : this.rollNo,
            name : this.name,
            age : this.age,
            email : this.email,
            date : this.date,
            isMale : this.isMale
        }
        this.StudApi.editPost(this.rollNo, data).then(()=>{this.getMethod()})
        this.cleanForm()
        this.updateDisable=true
    }

    remove=(id)=>{
        if(confirm("Do u really wnat to remove???")){
            this.StudApi.removePost(id).then(()=>{this.getMethod()})
        }
    }

    getMethod=()=>{
        this.StudApi.getData()
            .then(res=>
                {this.studentData=JSON.parse(res._body)
            })}

    cleanForm=()=>{
        this.rollNo=null
        this.name=null
        this.age=null
        this.email=null
        this.date=null
        this.isMale=null  
    }        
    }

export interface dataSet{
    rollNo:number;
    name:string;
    age:number;
    email:string;
    date:string
    isMale:boolean
}