import { Component } from "@angular/core";
import { ProductDataService } from "src/ProductDataService/ProductDataService";

@Component({
    selector:"productlist",
    templateUrl:"ProductListComponent.html"
})
export class ProductListComponent{
    productList=new Array()
    displayList=new Array()
    filter:string
    imageHide:boolean=true
    imageState:string="Hide Image"
    hoverRate:string

    constructor(private dataService:ProductDataService){
        dataService.getData().then(res=>{
            this.productList=JSON.parse(res._body)
            this.displayList=this.productList
        })
    }

    hideImage=()=>{
        if(this.imageHide){
            this.imageHide=false
            this.imageState="Show Image"
        }else{
            this.imageHide=true
            this.imageState="Hide Image"
        }
    }

    hoverEvent=(e)=>{
        this.hoverRate=e
    }

    filterChange=()=>{
        this.displayList=new Array()
        for(let i=0;i<this.productList.length;i++){
            if((this.productList[i].productName.toLowerCase()).includes(this.filter.toLowerCase())){
                this.displayList.push(this.productList[i])
            }else if(this.filter==""){
                this.displayList=this.productList
            }
        }
    }
}