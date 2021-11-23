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
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }