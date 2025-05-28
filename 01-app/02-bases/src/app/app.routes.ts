import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { DragonballPageComponent } from './components/dragonball-page/dragonball-page.component';
import { DragonballPageSuperComponent } from './components/dragonball-page-super/dragonball-page-super.component';

export const routes: Routes = [

    {path:'',component:CounterPageComponent},
    {path:'hero',component:HeroPageComponent},
    {path:'dragonball',component:DragonballPageComponent},
    {path:'dragonball-super',component:DragonballPageSuperComponent},
    {path:'**',redirectTo:''},
];
