import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductDataService{

    constructor(private http:Http){

    }

    getData(){
        return this.http.get("../assets/products.json").toPromise()
    }
}