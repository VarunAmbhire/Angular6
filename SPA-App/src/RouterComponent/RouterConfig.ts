import { Routes } from "@angular/router";
import { PageNotFound } from "./PageNotFound";
import { HomeComponent } from "./HomeComponent/HomeComponent";
import { AboutComponent } from "./AboutComponent/AboutComponet";
import { CarrierComponent } from "./CarrierComponent/CarrierComponent";
import { EmployeeComponent } from "./EmployeeComponent/EmployeeComponent";

export const routeConfig:Routes=[
    {
        path:"home",
        component:HomeComponent    
    },{
        path:"about",
        component:AboutComponent
    },{
        path:"carrier",
        component:CarrierComponent
    },{
        path:"employee/:id",
        component:EmployeeComponent
    },
    {
        path:"",
        redirectTo:"/home",
        pathMatch:"full"
    },{
        path:"**",
        component:PageNotFound
    }
]