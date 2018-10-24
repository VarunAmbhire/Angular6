import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'isMaleToText'})
export class isMaleToText implements PipeTransform{
    transform(value: boolean, after:string) {
      
        if(value){
           return after="Male"
        }else{
          return  after="Female"
        }
    }

}