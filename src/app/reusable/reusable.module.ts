import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './headers/headers.component';
import { FootersComponent } from './footers/footers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

export const routes:Routes = [
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full',
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'header',
    component:HeadersComponent
  },
  {
    path:'footer',
    component:FootersComponent
  }
]

@NgModule({
  declarations: [
    HeadersComponent,
    FootersComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class ReusableModule { }


