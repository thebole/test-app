import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ReactiveFormsModule } from "@angular/forms"

import { TestComponentComponent } from './test/test-component/test-component.component';
import { VoteComponent } from './03-set-up-and-tear-down/vote/vote.component';
import { TodoFormComponent } from './04-forms/todo-form/todo-form.component';
import { CoursesCardListComponent } from './courses/courses-card-list/courses-card-list.component';


@NgModule({
  declarations: [TestComponentComponent, VoteComponent, TodoFormComponent, CoursesCardListComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [ReactiveFormsModule],
})
export class PagesModule { }
