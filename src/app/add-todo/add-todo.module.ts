import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTodoPageRoutingModule } from './add-todo-routing.module';

import { AddTodoPage } from './add-todo.page';
import { Route } from '@angular/compiler/src/core';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AddTodoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTodoPageRoutingModule
  ],
  declarations: [AddTodoPage]
})
export class AddTodoPageModule {}
