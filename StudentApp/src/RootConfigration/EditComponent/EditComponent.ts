import { Component, Input } from "@angular/core";
import { StudentService } from "../StudentService";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector:"edit/:id",
    templateUrl:"EditComponent.html"
})
export class EditComponent{
    editRollNumber:number
    editName:string
    editAge:number
    editEmail:string
    editDate:number
    editIsMale:boolean
    status:string
    @Input()
    index:number
    sub
    list

    constructor(private studService:StudentService,private route: ActivatedRoute){
       
        this.sub=this.route.params.subscribe(params => {               
                this.index = +params['id']; 
            })
            studService.getData().then(res=>{
                this.list=JSON.parse(res._body);

            for(let i=0;i<this.list.length;i++){
                if(this.index==this.list[i].rollNo){
                        this.editRollNumber=this.list[i].rollNo
                        this.editName=this.list[i].name
                        this.editAge=this.list[i].age
                        this.editEmail=this.list[i].email
                        this.editDate=this.list[i].date
                        this.editIsMale=this.list[i].isMale
                    

                }
            }
        })

    }

    update=()=>{
        let data={
            rollNo:this.editRollNumber,
            name:this.editName,
            age:this.editAge,
            email:this.editEmail,
            date:this.editDate,
            isMale:this.editIsMale
        }
        this.studService.editPost(this.index,data).then(
            res=>{
                if(res.status==200){
                   this.status="Student Updated Successfully!!!"
                }else{
                    this.status="Failed to update Student"
                }            
            }
        )
        
        this.editRollNumber=null,
        this.editName=null,
        this.editAge=null,
        this.editEmail=null
        this.editDate=null
        
    }
}