import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaAddComponent } from './manga-add.component';

describe('MangaAddComponent', () => {
  let component: MangaAddComponent;
  let fixture: ComponentFixture<MangaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangaAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MangaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
