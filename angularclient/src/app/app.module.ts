import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import {PostFormComponent} from "./post-form/post-form.component";
import {FormsModule} from "@angular/forms";
import {PostService} from "./service/post-service";
import { BannerComponent } from './banner/banner.component';
<<<<<<< HEAD
import {RouterModule} from '@angular/router';
=======
import { CommentService } from './service/comment-service';
import { UpdateService } from './service/update-service';
>>>>>>> 80b24eb67a425b007c2594cf48851fe04e9534b9


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
    FormsModule,
    RouterModule.forRoot([]),

  ],
<<<<<<< HEAD
  providers: [PostService ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

=======
  providers: [PostService, CommentService, UpdateService ],
  bootstrap: [AppComponent]
>>>>>>> 80b24eb67a425b007c2594cf48851fe04e9534b9
})
export class AppModule { }
