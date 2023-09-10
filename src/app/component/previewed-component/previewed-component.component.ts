import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-previewed-component',
  templateUrl: './previewed-component.component.html',
  styleUrls: ['./previewed-component.component.scss'],
})
export class PreviewedComponentComponent {
  @Input() isButton: boolean = true;
}
