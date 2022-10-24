import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubFollowersComponent } from './Components/github-followers/github-followers.component';
import { PostComponent } from './Components/post/post.component';
import { ReactiveFormsComponent } from './Components/reactive-forms/reactive-forms.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';

const routes: Routes = [
  {
    path:"",
    component:PostComponent
  },

  {
    path:"followers",
    component:GithubFollowersComponent
  },
  {
    path:"users",
    component:UserProfileComponent
  },
  {
    path:"forms",
    component:ReactiveFormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
