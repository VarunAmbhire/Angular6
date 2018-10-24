import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector:"st-toggleButton",
    templateUrl:"ToggleButtonComponent.html"
})
export class ToggleButtonComponent{

    @Input()
    textContent:string
    @Input()
    onColor:string
    @Input()
    offColor:string
    state:string
    @Output()
    stateChange:EventEmitter<string>=new EventEmitter()


    constructor(){
        console.log("In Constructor")
        console.log(this.textContent+" in constructor")
    }

    ngOnInit(){
        console.log("In NgOnInit")
        console.log(this.textContent+" in NgOninit"+this.onColor)
        this.state="Off"               
        this.stateChange.emit(this.state)
        let button=document.getElementById("toggleButton")
        button.style.backgroundColor=this.offColor
    }

    toggle=()=>{
        let button=document.getElementById("toggleButton")
        
        if(button.style.backgroundColor==this.offColor){
            button.style.backgroundColor=this.onColor
            this.state="On"
        }else{
            button.style.backgroundColor=this.offColor
            this.state="Off"
        }
        this.stateChange.emit(this.state)
       }
}