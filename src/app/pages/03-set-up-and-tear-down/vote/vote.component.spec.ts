import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  // Arrange
  let component: VoteComponent;
  let fixture: ComponentFixture<VoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment totalVotes when upvoted', ()=> {

    // Act
    component.upVote();
    // Assert
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downvotes', ()=> {
    // Act
    component.downVote();
    // Assert
    expect(component.totalVotes).toBe(-1);
  });
});
