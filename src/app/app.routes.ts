import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SamanthaComponent } from './pages/samantha/samantha.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { PaisesComponent } from './pages/paises/paises.component';

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
        path: "pokemon",
        component: PokemonComponent
    },
    {
        path: "paises",
        component: PaisesComponent
    },
    {
        path: "**",
        redirectTo: "home"

    },






];
