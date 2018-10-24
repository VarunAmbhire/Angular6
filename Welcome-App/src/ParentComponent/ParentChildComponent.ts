import { Component } from "@angular/core";

@Component({
    selector:'st-parent-child',
    templateUrl:'ParentChildComponent.html'
})
export class ParentChildComponent{
    text:string="Hello"
    childButtonState:string
    hoverRate:number

    childEvent(e){
        this.childButtonState=e
    }

    hoverEvent(e){
        console.log(e)
        this.hoverRate=e
    }
}