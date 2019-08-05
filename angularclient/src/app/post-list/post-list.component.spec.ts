<<<<<<< HEAD
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListComponent } from './post-list.component';
import {PostService} from '../service/post-service';
import {CommentService} from '../service/comment-service';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListComponent ],
      imports: [FormsModule],
      providers: [PostService, CommentService, HttpClient, HttpHandler, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy()
  });
//  trying to make some simple tests to pass
//   it('test', () => {
//     expect(PostListComponent).toEqual('asdf')
//   })
});
=======
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//
// import { PostListComponent } from './post-list.component';
//
// describe('PostListComponent', () => {
//   let component: PostListComponent;
//   let fixture: ComponentFixture<PostListComponent>;
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ PostListComponent ]
//     })
//     .compileComponents();
//   }));
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(PostListComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBe(true)
//   });
// //  trying to make some simple tests to pass
// //   it('test', () => {
// //     expect(PostListComponent).toEqual('asdf')
// //   })
// });
>>>>>>> 9b192741721cda269ffb7885c188292cd2e818b1
