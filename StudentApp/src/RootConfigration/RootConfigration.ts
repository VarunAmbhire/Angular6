import { Routes } from "@angular/router";
import { HomeComponent } from "./HomeComponent/HomeComponent";
import { AddComponent } from "./AddComponent/AddComponent";
import { EditComponent } from "./EditComponent/EditComponent";
import { PageNotFound } from "./PageNotFound";

export const rootConfig:Routes=[
    {
        path:"home",
        component:HomeComponent
    },{
        path:"add",
        component:AddComponent
    },{
        path:"edit/:id",
        component:EditComponent
    },{
        path:"",
        redirectTo:"/home",
        pathMatch:"full"
    },{
        path:"**",
        component:PageNotFound
    }
]