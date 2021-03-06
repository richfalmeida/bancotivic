import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const modules = [
  CommonModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatCardModule,
  MatDatepickerModule,
  MatDividerModule,
  MatSelectModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule

]

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
})
export class SharedModule { }
