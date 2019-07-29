import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import {PostFormComponent} from "./post-form/post-form.component";
import {FormsModule} from "@angular/forms";
import {PostService} from "./service/post-service";
import { BannerComponent } from './banner/banner.component';
import { CommentService } from './service/comment-service';


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostFormComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [PostService, CommentService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
