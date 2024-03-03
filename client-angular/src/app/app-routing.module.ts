import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthorizedComponent } from './components/authorized/authorized.component';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'authorized',component:AuthorizedComponent},
  {path:'user',component:UserComponent},
  {path:'admin',component:AdminComponent},
  {path:'logout', component:LogoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
