import { Component } from "@angular/core";
import { MathService } from "./MathService";


@Component({
    selector: "cust-two",
    templateUrl:"TwoWayBindingComponent.html"
})
export class TwoWayBindingComponent{
    customer:ICustomer
    color:string
    num:number

    constructor(private _svc:MathService){
        this.customer={
                firstName:"asd",
                lastName:"lkj",
                income:122
        }
    }

    firstNameChange=(e)=>{
        this.customer.firstName=e;
    }

    isPrime=(e)=>{
        this.num=e;
        let prime=true;
        for(let i=2;i<this.num;i++){
            if(this.num%i==0){
                prime=false;                
            }
        }
        if(prime){
            this.color="green"
        }else if(!prime){
            this.color="red"
        }
        
        if(e==null){
            this.color="white"
        }
    }
    
}
export interface ICustomer{
    firstName:string;
    lastName:string;
    income:number;
}