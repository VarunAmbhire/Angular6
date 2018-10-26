import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector:"st-star",
    templateUrl:"StarComponent.html"
})
export class StarComponent{

    @Input()
    rating:number
    @Output()
    hoverEvent:EventEmitter<number>=new EventEmitter()

    ngOnInit(){
        this.hoverEvent.emit(this.rating)
    }
    constructor(){}
}