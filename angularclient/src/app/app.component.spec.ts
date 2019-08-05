import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import {PostFormComponent} from "./post-form/post-form.component";
import {FormsModule} from "@angular/forms";
import {PostService} from "./service/post-service";
import { BannerComponent } from './banner/banner.component';
import {RouterModule} from '@angular/router';
<<<<<<< HEAD
import {CUSTOM_ELEMENTS_SCHEMA, DebugElement} from '@angular/core';
import {CommentService} from './service/comment-service';
=======
import {DebugElement} from '@angular/core';
>>>>>>> 9b192741721cda269ffb7885c188292cd2e818b1


describe('AppComponent', () => {
  let de = DebugElement;
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        FormsModule,
<<<<<<< HEAD
        HttpClientModule,
=======
>>>>>>> 9b192741721cda269ffb7885c188292cd2e818b1
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        BannerComponent,
        PostListComponent,
        PostFormComponent
      ],
<<<<<<< HEAD
      providers: [PostService, HttpClient, HttpHandler, CommentService],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
=======
      providers: [PostService, HttpClient, HttpHandler, HttpClientModule]
>>>>>>> 9b192741721cda269ffb7885c188292cd2e818b1
    }).compileComponents();

  }));

  //it help to solve problem with TypeError: _this.handler.handle is not a function error
  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy()
  });
//tests
  it('should loginbtn to be Login', function() {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.loginBtn).toEqual("Login")
  });

  it('should 1', function() {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.showSignInModal = false;
  });

});
