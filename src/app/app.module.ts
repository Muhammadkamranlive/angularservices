import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './Components/post/post.component';
import { GithubFollowersComponent } from './Components/github-followers/github-followers.component';
import { ReactiveFormsComponent } from './Components/reactive-forms/reactive-forms.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { PostServiceService } from './Services/post-service.service';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    GithubFollowersComponent,
    ReactiveFormsComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [
    PostServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
