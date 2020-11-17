import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepoComponent } from './repo/repo.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: 'user-link', component: UserComponent },
  { path: 'repo-link', component: RepoComponent},
  { path: '', redirectTo: 'user-link', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
