import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector:'employee',
    templateUrl:"EmployeeComponent.html"
})
export class EmployeeComponent{
    employeeList=[
        {id:101,name:"asd"},
        {id:102,name:"qwe"},
        {id:103,name:"rty"},
        {id:104,name:"zxc"},
        {id:105,name:"ajkl"},
        {id:105,name:"opi"}
    ]
sub
    display
    paramId
    constructor(private route: ActivatedRoute) {}

    ngOnInit(){
        this.sub=this.route.params.subscribe(params => {
            for(let i=0;i<this.employeeList.length;i++){                
                this.paramId = +params['id']; 
                if(this.paramId==this.employeeList[i].id){
                    this.display=this.employeeList[i].id+" "+this.employeeList[i].name
                }
            }

         });
    }
}