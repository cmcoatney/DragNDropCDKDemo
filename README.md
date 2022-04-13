# Drag & Drop CDK Demo

## install
ng add @angular/material

## Module
```typescript
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  ...
  imports: [BrowserModule, BrowserAnimationsModule, DragDropModule],
  ...
})
```

## Component
```typescript
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

...

  drop(event: any) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
```
