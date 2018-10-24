import { Component } from "@angular/core";
import { QuestionBankService } from "./QuestionBankService";
import { Chart } from 'chart.js';

@Component({
    selector:"st-question",
    templateUrl:"QuestionBankComponent.html"
})
export class QuestionBankComponent{
    questionList:any
    queId:number
    que:string
    queOption:string[]
    queAns:string
    index:number=0
    right:number=0;
    optionChoose:string;
    visible:boolean=false
    chart:any

    constructor(private questionData:QuestionBankService){
        questionData.getData().then(
            res=>{
                this.questionList=JSON.parse(res._body)
                this.queId=this.questionList[this.index].id
                this.que=this.questionList[this.index].content
                this.queAns=this.questionList[this.index].answer
                this.queOption=this.questionList[this.index].option
              })
    }

    

    next=()=>{
        if("option["+this.optionChoose+"]"==this.queAns){
            this.right++;
        }
        if(this.index<this.questionList.length-1){
            this.index++;
            this.queId=this.questionList[this.index].id
            this.que=this.questionList[this.index].content
            this.queAns=this.questionList[this.index].answer
            this.queOption=this.questionList[this.index].option
        }else{
            this.result()
        }
    }

    result=()=>{
        this.visible=true
        let wrong=this.index-this.right
        console.log(wrong)
        resultData = {
            datasets: [{
                data: [this.right, wrong]
            }],
        
            labels: [
                'Green',
                'Red'
            ]
        };
        var chart=new Chart()

        }

}