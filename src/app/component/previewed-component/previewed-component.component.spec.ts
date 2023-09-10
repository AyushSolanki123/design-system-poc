import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewedComponentComponent } from './previewed-component.component';

describe('PreviewedComponentComponent', () => {
  let component: PreviewedComponentComponent;
  let fixture: ComponentFixture<PreviewedComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewedComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
