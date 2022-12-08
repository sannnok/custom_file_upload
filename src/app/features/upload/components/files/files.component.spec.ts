import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesComponent } from './files.component';

describe('CreateComponent', () => {
  let component: FilesComponent;
  let fixture: ComponentFixture<FilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});