import { Component } from "@angular/core";
import { StudentService } from "../StudentService";

@Component({
    selector:"add",
    templateUrl:"AddComponent.html"
})
export class AddComponent{
    rollNumber:number
    name:string
    age:number
    email:string
    date:number
    isMale:boolean
    status:string

    constructor(private stud:StudentService){
            status=""
    }

    add=()=>{
        let data={
            rollNo:this.rollNumber,
            name:this.name,
            age:this.age,
            email:this.email,
            date:this.date,
            isMale:this.isMale
        }
        this.stud.postData(data).then(
            res=>{
                if(res.status==200){
                   this.status="Student Added Successfully!!!"
                }else{
                    this.status="Failed to add Student"
                }            
            }
        )
        
        this.rollNumber=null,
        this.name=null,
        this.age=null,
        this.email=null
        this.date=null
        
    }
}