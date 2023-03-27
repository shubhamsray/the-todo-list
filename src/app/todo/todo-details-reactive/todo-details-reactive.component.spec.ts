import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDetailsReactiveComponent } from './todo-details-reactive.component';

describe('TodoDetailsReactiveComponent', () => {
  let component: TodoDetailsReactiveComponent;
  let fixture: ComponentFixture<TodoDetailsReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDetailsReactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoDetailsReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
