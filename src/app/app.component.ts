import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cdkdragdrop-proto';
  lastEvent: string = '';

  items = [
    { select: 'component', name: 'New Component' },
    { select: 'material', name: 'Angular Material' },
    { select: 'pwa', name: 'Add PWA Support' },
    { select: 'dependency', name: 'Add Dependency' },
    { select: 'test', name: 'Run and Watch Tests' },
    { select: 'build', name: 'Build for Production' },
  ];

  drop(event: any) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
}
