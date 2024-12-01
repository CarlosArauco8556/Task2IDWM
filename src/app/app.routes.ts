import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'porfolio',
        pathMatch: 'full',
        loadComponent: () => import('./Porfolio/Pages/main-page/main-page.component').then(m => m.MainPageComponent)
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'portfolio'
    }
];
