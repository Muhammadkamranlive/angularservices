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
import { NavbarComponent } from './Includes/navbar/navbar.component';
import {ReactiveFormsModule} from "@angular/forms"
@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    GithubFollowersComponent,
    ReactiveFormsComponent,
    UserProfileComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [
    PostServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
