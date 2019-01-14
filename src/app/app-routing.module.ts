import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import { EdituserComponent } from './edituser/edituser.component';
import { AdduserComponent } from './adduser/adduser.component';

const routes: Routes = [
  { path: "", redirectTo: "userlist", pathMatch: "full" },
  { path: 'userlist', component: UserlistComponent },
  { path: 'edituser/:id', component: EdituserComponent },
  { path: 'adduser', component: AdduserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
