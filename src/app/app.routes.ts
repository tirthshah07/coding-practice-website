import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: '', pathMatch:'full'},
    {path: '', loadComponent: ()=> import('./pages/home/home.component').then(m => m.HomeComponent)},
    {path: 'explore', loadComponent: () => import('./pages/explore/explore.component').then(m => m.ExploreComponent)}
];
