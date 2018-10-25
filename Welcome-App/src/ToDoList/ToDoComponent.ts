import { Component } from "@angular/core";

@Component({
    selector:"st-todo",
    templateUrl:"ToDoComponent.html"
})
export class ToDoComponent{
    task:string
    isDone:boolean
    taskList=new Array()

    constructor(){this.taskList=this.getData()}

    value=()=>{
        let data={
            task:this.task,
            isDone:this.isDone
        }
        this.taskList.push(data)
        this.task=""
        this.saveData()
    }

    // taskDone=(e,i)=>{
    //     if(e.target.checked){
    //         this.taskList[i].isDone=true
    //     }else{
    //         this.taskList[i].isDone=false
    //     }   
    //     this.saveData()
    // }

    remove=(i)=>{
        if(confirm("Do u really want to delete???")){
            this.taskList.splice(i,1)
            this.saveData()
        }
    }

    saveData=()=>{
        localStorage.setItem("angTodo",JSON.stringify(this.taskList))
    }

    getData=()=>{
        return JSON.parse(localStorage.getItem("angTodo"))
    }


    childEvent=(e,i)=>{
        console.log(e)
        if(e=="Done"){
            this.taskList[i].isDone=true
        }else{
            this.taskList[i].isDone=false
        }   
        this.saveData()
    }
}