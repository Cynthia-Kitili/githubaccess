import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar/navbar.component';
import {FormsModule} from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { RepoComponent } from './repo/repo.component';
import { DateCountPipe } from './date-count.pipe'
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UserComponent,
    NavbarComponent,
    HighlightDirective,
    RepoComponent,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
