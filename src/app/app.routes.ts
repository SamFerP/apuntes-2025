import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SamanthaComponent } from './pages/samantha/samantha.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent

    },
    {
        path: "samantha",
        component: SamanthaComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "**",
        redirectTo: "home"

    },






];
