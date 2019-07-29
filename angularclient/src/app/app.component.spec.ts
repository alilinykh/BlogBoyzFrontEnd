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
import {DebugElement} from '@angular/core';


describe('AppComponent', () => {
  let de = DebugElement;
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        FormsModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        BannerComponent,
        PostListComponent,
        PostFormComponent
      ],
      providers: [PostService, HttpClient, HttpHandler, HttpClientModule]
    }).compileComponents();

  }));

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
