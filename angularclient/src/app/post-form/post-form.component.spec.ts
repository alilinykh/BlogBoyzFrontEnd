import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import { PostFormComponent } from './post-form.component';
import {FormsModule} from '@angular/forms';
import {PostService} from '../service/post-service';
import {RouterModule} from '@angular/router';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Post} from '../post';
import {post} from 'selenium-webdriver/http';



describe('PostFormComponent', () => {
  let component: PostFormComponent;
  let fixture: ComponentFixture<PostFormComponent>;
  let de = DebugElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), FormsModule],
      declarations: [ PostFormComponent ],
      providers: [PostService, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFormComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy()
  });
  //testing elements
  it('should loggedUser to be empty string', function() {
    expect(component.loggedInUserName).toBe("");
  });
  it('should userId undefined', function() {
    expect(component.loggedInUser_Id).toBeUndefined()
  });
  it('Setting enabled to false disables the submit button', () => {
    component.showNewPost = false;
  });

});


