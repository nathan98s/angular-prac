import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { NoteComponent } from './note';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'user', component: UserComponent},
  {path:'', component:HomeComponent},
  {path:'note', component:NoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
