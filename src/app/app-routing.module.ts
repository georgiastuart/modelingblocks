import {RouterModule, Routes} from '@angular/router';
import {BlocklyComponent} from './blockly/blockly.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: BlocklyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
