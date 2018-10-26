import { Component } from "@angular/core";
import { StudentService } from "../StudentService";

@Component({
    selector:"home",
    templateUrl:"HomeComponent.html"
})
export class HomeComponent{
    studentList

     constructor(private studService:StudentService){
        studService.getData().then(
            res=>{
                this.studentList=JSON.parse(res._body)
            })        
     }

     delete=(id)=>{

    if(confirm("Do u really want to delete???")){
            this.studService.removePost(id).then(()=>{
                this.studService.getData().then(
                    res=>{
                    this.studentList=JSON.parse(res._body)
                })
            })         
        }
     }

}