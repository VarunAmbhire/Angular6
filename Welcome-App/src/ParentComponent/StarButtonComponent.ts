import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector:'st-starButton',
    templateUrl:'StarComponent.html'
})
export class StarButtonComponent{
    @Input()
    rating:number
    @Output()
    hoverEvent:EventEmitter<number>=new EventEmitter()

    ngOnInit(){
        this.hoverEvent.emit(this.rating)
    }


}