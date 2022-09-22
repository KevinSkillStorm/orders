import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePdfPageComponent } from './create-pdf-page.component';

describe('CreatePdfPageComponent', () => {
  let component: CreatePdfPageComponent;
  let fixture: ComponentFixture<CreatePdfPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatePdfPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreatePdfPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
