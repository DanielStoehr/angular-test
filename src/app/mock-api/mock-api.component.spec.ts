import { ApiService } from './api.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockApiComponent } from './mock-api.component';

describe('MockApiComponent with empty API', () => {
  let component: MockApiComponent;
  let fixture: ComponentFixture<MockApiComponent>;
  let mock;

  beforeEach(async () => {
    mock = jasmine.createSpyObj(['getAllData']);
    mock.getAllData.and.returnValue({ subscribe: () => [] });
    await TestBed.configureTestingModule({
      declarations: [MockApiComponent],
      imports: [],
      providers: [{ provide: ApiService, useValue: mock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MockApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('check if button is disabled', () => {
    let button = fixture.debugElement.nativeElement.querySelector(
      '#button'
    ) as HTMLButtonElement;
    console.log(button);

    expect(button!.disabled).toBeTrue();
  });
});

describe('MockApiComponent with not-empty API', () => {
  let component: MockApiComponent;
  let fixture: ComponentFixture<MockApiComponent>;
  let mock;

  beforeEach(async () => {
    mock = jasmine.createSpyObj(['getAllData']);
    mock.getAllData.and.returnValue({ subscribe: () => [{ name: 'test' }] });
    await TestBed.configureTestingModule({
      declarations: [MockApiComponent],
      imports: [],
      providers: [{ provide: ApiService, useValue: mock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MockApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('check if button is activated', () => {
    let button = fixture.debugElement.nativeElement.querySelector(
      '#button'
    ) as HTMLButtonElement;
    console.log(button);

    expect(button!.disabled).toBeFalse();
  });
});
