import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeListComponent } from './like-list.component';

describe('LikeListComponent', () => {
  let component: LikeListComponent;
  let fixture: ComponentFixture<LikeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
