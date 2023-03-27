import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent {
  constructor() {}

  @Input() title = '';
  @Input() todoContents = '';

  @Output() cardClicked = new EventEmitter();
  @Output() openFullScreenClicked = new EventEmitter();
  @Output() deleteClicked = new EventEmitter();

  ngOnInit(): void {}

  onCardClick() {
    this.cardClicked.emit();
  }

  onOpenFullScreenClicked() {
    this.openFullScreenClicked.emit();
  }

  onDeleteClick() {
    this.deleteClicked.emit();
  }
}

