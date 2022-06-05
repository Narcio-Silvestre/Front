import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSimulationComponent } from './add-simulation/add-simulation.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"simulation/add",component:AddSimulationComponent},
  {path:"user",component:DashboardUserComponent},
  {path:"admin",component:DashboardAdminComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
