import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { TestComponentComponent } from './test/test-component/test-component.component';
import { VoteComponent } from './03-set-up-and-tear-down/vote/vote.component';


@NgModule({
  declarations: [TestComponentComponent, VoteComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
