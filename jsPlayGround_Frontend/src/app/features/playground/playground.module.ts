import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './components/editor/editor.component';
import { PreviewComponent } from './components/preview/preview.component';



@NgModule({
  declarations: [
    EditorComponent,
    PreviewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PlaygroundModule { }
