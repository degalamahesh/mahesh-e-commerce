import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatAutocompleteModule} from '@angular/material/autocomplete';




const MaterialComponent =[
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatGridListModule,
  MatCardModule,
  FlexLayoutModule,
  MatStepperModule,
  MatFormFieldModule,
  ReactiveFormsModule,
  MatInputModule,
  MatDialogModule,
  MatRadioModule,
  FormsModule,
  MatExpansionModule,
  MatAutocompleteModule
]


@NgModule({
  imports: [MaterialComponent],
  exports: [MaterialComponent] 
})
export class MaterialModule { }
