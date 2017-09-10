import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
  { path: 'register', loadChildren: 'app/register/register.module#RegisterModule' },
  { path: '**', redirectTo: 'pages', pathMatch: 'full' },
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
