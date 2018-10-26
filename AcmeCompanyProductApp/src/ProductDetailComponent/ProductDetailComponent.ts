import { Component, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductDataService } from "src/ProductDataService/ProductDataService";

@Component({
    selector:"productdetail/:item",
    templateUrl:"ProductDetailComponent.html"
})
export class ProductDetailComponent{
    sub
    id
    itemList
    item
    prodName
    prodCode
    prodDescription
    prodAvailability
    prodPrice
    prodrate
    prodImage


    constructor(private dataService:ProductDataService,private route: ActivatedRoute){
        this.sub=this.route.params.subscribe(params => {               
            this.id = +params['item'];
        })
        dataService.getData().then(res=>{
            this.itemList=JSON.parse(res._body)
            for(let i=0;i<this.itemList.length;i++){
                if(this.id==this.itemList[i].productId){
                    this.item=this.itemList[i]
                    this.prodName=this.item.productName
                    this.prodCode=this.item.productCode
                    this.prodDescription=this.item.description
                    this.prodAvailability=this.item.releaseDate
                    this.prodPrice=this.item.price
                    this.prodrate=this.item.starRating
                    this.prodImage=this.item.imageUrl
                    }
                }
        })   
            
    }
}