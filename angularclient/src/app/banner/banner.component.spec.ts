import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BannerComponent } from './banner.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let de = DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //custom tests on banner
  it('should should have h1 tag on BlogBoyz', function() {
<<<<<<< HEAD
    expect(de.query(By.css('h1')).nativeElement.innerText).toEqual('BlogBoyZ');
=======
    expect(de.query(By.css('h1')).nativeElement.innerText).toBe('BlogBoyZ');
>>>>>>> 9b192741721cda269ffb7885c188292cd2e818b1
  });
});
