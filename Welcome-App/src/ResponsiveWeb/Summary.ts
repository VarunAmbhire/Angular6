import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:"summary"})
export class Summary implements PipeTransform{
    transform(value: string, lenght:number) {
        if(lenght==null){
            return value.slice(0,20)+"..."
        }else{

            return value.slice(0,lenght)+"..."
        }
    }

}