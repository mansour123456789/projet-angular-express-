import { Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';

export const routes: Routes = [
    { path:'home', component: DashbordComponent },

 { path: 'a', loadChildren: () => import('./authentification/authentification.module').then(m => m.AuthentificationModule) },
 

];
