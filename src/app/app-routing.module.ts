import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { HomeComponent } from './user/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CanActivateRouteGuard } from './services/auth/can-activate-route.guard';
// import {} from './contact/contact.module#ContactModule'


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent, canActivate: [CanActivateRouteGuard] },
  { path: 'activity', loadChildren: './contact/contact.module#ContactModule' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
