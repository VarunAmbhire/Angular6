import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class QuestionBankService{

    constructor(private _http:Http){

    }

    getData(){
        return this._http.get("http://localhost:4200/assets/question.json").toPromise()
    }
}