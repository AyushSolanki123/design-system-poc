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

  cssVariables:any = {}
  colorsList:any = []
  nestedColors: any = []

  constructor(private readCssVariableService: ReadCssVariablesService) {}

  ngOnInit(): void {
    this.readCssVariableService.getScssVariables().subscribe((data) => {
      this.cssVariables = data; 
      this.colorsList = this.extractColors(data)
      this.nestedColors = this.colorsList.filter((color: any) => color.isNested)
      this.colorsList = this.colorsList.filter((color: any) => !color.isNested)
    })
  }


  extractColors(obj:any, parentKey = "", isNested = false):any {
    const colorObjects = [];
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const currentKey = parentKey ? `${parentKey}-${key}` : key;
  
        if (obj[key]?.type === "color") {
          // If the property has a 'type' of 'color', extract it
          colorObjects.push({
            name: currentKey,
            value: obj[key].value,
            isNested: isNested
          });
        } else if (typeof obj[key] === "object") {
          // If the current property is an object, recursively call the function
          colorObjects.push(...this.extractColors(obj[key], currentKey, true));
        } 
      }
    }
    return colorObjects;
  }

  showTab(tabName: string): void {
    this.activeTab = tabName;
  }

}
