import { Component } from "@angular/core";
import { NumberApiService } from "./NumberApiService";

@Component({
    selector:"num-fact",
    templateUrl:"NumberApiComponent.html"
})
export class NumberApiComponent{
    numb:number;
    fact:any
    factList=new Array();
    constructor(private _numberApiService:NumberApiService){
        this.getData()
        // this.style()
    }
    

    
    checkFact=()=>{       
        this._numberApiService.loadData(this.numb)
        .then(
            res=>{
                this.factList.push(res._body)
                this.saveData();
            });
        this.numb=null 
    }   


    saveData=()=>{
        localStorage.setItem("angNumber",JSON.stringify(this.factList))
        // this.style()
    }

    getData=()=>{
                this.factList=JSON.parse(localStorage.getItem("angNumber"))                 
                // this.style()         
    }

    style=()=>{
        for(let i=0;i<this.factList.length;i++){
            let ele=document.getElementById(i+"")
            console.log(ele.id)
            if(i%2==0){
                ele.style.backgroundColor="red"
            }else{
                ele.style.backgroundColor="blue"
            }
        }
    }
}