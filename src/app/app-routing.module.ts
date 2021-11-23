import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'portafolio',
        loadChildren: () => import('./portafolio/portafolio.module').then( m => m.PortafolioModule )
    },
    { path: '**', redirectTo:'portafolio' } 
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash:true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }