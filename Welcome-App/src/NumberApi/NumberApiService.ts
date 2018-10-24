import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class NumberApiService{
    // result:any
        constructor(private _http:Http){ 
        }
    
    loadData=(num:number)=>{    
      return this._http.get("http://numbersapi.com/"+num)
            .toPromise()                        
        }
}

