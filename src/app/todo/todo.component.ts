import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { CommonSharedService } from '../common-shared.service';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  openSidenavSubscription: any;
  todoId: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private commonSharedService: CommonSharedService
  ) {}

  ngOnInit(): void {
    this.openSidenavSubscription =
      this.commonSharedService.openTodoDetailsSidenav.subscribe((todoId) => {
        this.toggleSidenav(todoId);
      });
  }

  ngOnDestroy() {
    this.openSidenavSubscription.unsubscribe();
  }

  goToTodoList() {
    // this.router.navigate(['list'], { relativeTo: this.activatedRoute });
    this.router.navigateByUrl('todo/list');
  }

  toggleSidenav(todoId: any) {
    this.todoId = todoId;
    this.sidenav.toggle();
  }
}

