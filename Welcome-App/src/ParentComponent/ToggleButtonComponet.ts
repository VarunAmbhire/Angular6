import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector:"st-toggleButton",
    templateUrl:"ToggleButtonComponent.html"
})
export class ToggleButtonComponent{

    @Input()
    textContent:boolean
    @Input()
    onColor:string
    @Input()
    offColor:string
    state:string
    @Output()
    stateChange:EventEmitter<string>=new EventEmitter()


    constructor(){ }

    ngOnInit(){
        if(this.textContent){
            this.state="Done"
        }else if(!this.textContent){
            this.state="Pending"
        }
    }

    toggle=()=>{
        console.log(this.textContent)
        if(this.textContent){
            this.state="Pending"
            this.textContent=false
        }else if(!this.textContent){
            this.state="Done"
            this.textContent=true
        }
        this.stateChange.emit(this.state)
       }
}