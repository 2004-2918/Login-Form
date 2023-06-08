import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PracticeComponent } from './practice/practice.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"Redirect",component:PracticeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
