import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesfeedComponent } from './notesfeed.component';

describe('NotesfeedComponent', () => {
  let component: NotesfeedComponent;
  let fixture: ComponentFixture<NotesfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesfeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
