import { Component } from "@angular/core";

@Component({
    selector:'game-blueball',
    templateUrl: '../BlueBallGame/BlueBallComponent.html',
    styleUrls: ['../BlueBallGame/BlueBallComponent.css']
})
export class BlueBallComponent{
    title="BlueBall Game"
    attempt=5;
    numList:number[]=new Array(50);
    check:boolean[]=new Array(this.numList.length);
    blueBall=Math.floor(Math.random()*this.numList.length)
    gameStatus="Playing";
    visibility=false;

    checkBall=(e)=>{
        console.log(e.target)
        // console.table(e.target)
        let n=e.target.id;
        this.attempt--; 
                if(n==this.blueBall && this.attempt>=0){
                    e.target.style.backgroundColor='blue';
                    this.gameStatus="Win."
                    this.attempt=0;
                    this.visibility=true;
                }else{
                    this.otherBall(e)
                }

                // if(this.attempt==0){
                //     this.visibility=true;
                // }
    }

    otherBall=(e)=>{
        let num=e.target.id;
        if(num<this.blueBall && this.attempt>=0){
            e.target.style.backgroundColor='red'
            this.check[num]=true;
        }else if(num>this.blueBall && this.attempt>=0){
            e.target.style.backgroundColor='green'; 
            this.check[num]=true;       
        }else{this.attempt=0}
        
        if(this.attempt==0){
            this.visibility=true
            this.gameStatus="Failed"
        }   
    }

    reset=()=>{     
            this.attempt=5;
            this.numList=new Array(50);
            for(let idB=0;idB<this.numList.length;idB++){
                let newEle=document.getElementById(idB+"")
                newEle.style.backgroundColor="#D3D3D3"
            }            
            this.check=new Array(this.numList.length);
            this.blueBall=Math.floor(Math.random()*this.numList.length)
            this.gameStatus="Playing";
            this.visibility=false;
    }

}