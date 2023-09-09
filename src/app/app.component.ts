import { Component, OnInit } from '@angular/core';
import { ReadCssVariablesService } from './service/read-css-variables/read-css-variables.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'design-system-poc';
  activeTab: string = 'colors'; // Initialize with 'colors' tab

  colors = [
    { name: 'Primary', hex: '#3498db' },
    { name: 'Secondary', hex: '#e74c3c' },
    { name: 'Accent', hex: '#f39c12' },
    // Add more colors as needed
  ];

  constructor(private readCssVariableService: ReadCssVariablesService) {}

  ngOnInit(): void {
    this.readCssVariableService.getScssVariables().subscribe((data) => console.log(data))
  }



  showTab(tabName: string): void {
    this.activeTab = tabName;
  }

}
