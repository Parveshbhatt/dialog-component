import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RtSidebarComponent } from './rt-sidebar/rt-sidebar.component';

const routes: Routes = [
  {path:'#', component:RtSidebarComponent},
  {path:'dashboard', component:RtSidebarComponent},
  {path:'reviews', component:RtSidebarComponent},
  {path:'admin-users', component:RtSidebarComponent},
  {path:'blogs', component:RtSidebarComponent},
  {path:'**', component:RtSidebarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 