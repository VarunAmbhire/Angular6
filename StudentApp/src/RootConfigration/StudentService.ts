import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class StudentService{

    
    constructor(private _http:Http){}

    getData(){
        return this._http.get("http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students").toPromise()
    }

    postData(content){
        return this._http.post("http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students",content).toPromise()
    }

    editPost(id, content){
        return this._http.put("http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students/"+id,content).toPromise()
    }

    removePost(id){
        return this._http.delete("http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students/"+id).toPromise()
    }
}