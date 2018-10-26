import { Routes } from "@angular/router";
import { PageNotFound } from "src/PageNotFound/PageNotFound";
import { WelcomeComponent } from "src/WelcomeComponet/WelcomeComponent";
import { ProductListComponent } from "src/ProductListComponent/ProductListComponent";
import { ProductDetailComponent } from "src/ProductDetailComponent/ProductDetailComponent";


export const routeConfig:Routes=[
    {
        path:"welcome",
        component:WelcomeComponent
    },{
        path:"productlist",
        component:ProductListComponent
    },{
        path:"productdetail/:item",
        component:ProductDetailComponent
    },{
        path:"",
        redirectTo:"/welcome",
        pathMatch:"full"
    },{
        path:"**",
        component:PageNotFound
    }
]