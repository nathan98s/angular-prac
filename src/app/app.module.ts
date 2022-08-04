import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NoteComponent } from './note/note.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { PostItComponent } from './post-it/post-it.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NoteComponent,
    UserComponent,
    HomeComponent,
    PostItComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
