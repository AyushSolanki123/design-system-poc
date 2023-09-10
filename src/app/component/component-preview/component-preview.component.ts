import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-preview',
  templateUrl: './component-preview.component.html',
  styleUrls: ['./component-preview.component.scss'],
})
export class ComponentPreviewComponent implements OnInit {
  @Input() title: string = '';
  @Input() isButton: boolean = false;
  showCode: boolean = false;
  currentCode: any = {};

  componentCode: any = {
    button: {
      html: `
      <button class="custom-button" (click)="onClick()">Click Me</button>
      `,
      css: `
      .custom-button {
        background-color: $button-background-primary;
        color: #fff;
        padding: 10px 20px; 
        border: none;
        border-radius: 5px; 
        cursor: pointer;
      }
      
      /* Add hover effect */
      .custom-button:hover {
        background-color: #1565c0;
      }`,
      ts: `
      onClick(): void {
        // do Something
      }
      `,
    },
    input: {
      html: `
      <div class="search-container">
        <mat-icon class="search-icon">search</mat-icon>
        <input
          #searchInput
          type="text"
          class="search-input"
          placeholder="Search"
          (keyup.enter)="performSearch(searchInput.value)"
        />
        <mat-icon class="filter-icon" (click)="openFilters()">filter_list</mat-icon>
      </div>
      `,
      css: `
      /* Style the search container */
      .search-container {
        position: relative;
        display: flex;
        align-items: center;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 8px;
        width: 400px; /* Adjust the width as needed */
      }

      /* Style the search icon */
      .search-icon {
        position: absolute;
        left: 10px; /* Adjust the left position as needed */
        color: #ccc; /* Icon color */
        cursor: pointer;
      }

      /* Style the search input field */
      .search-input {
        border: none;
        outline: none;
        padding: 4px 30px 4px 25px; /* Adjust the padding as needed */
        border-radius: 4px;
        font-size: 16px;
        width: 100%;
      }

      /* Style the filter icon */
      .filter-icon {
        position: absolute;
        right: 10px; /* Adjust the right position as needed */
        color: #ccc; /* Icon color */
        cursor: pointer;
      }
      `,
      ts: `
      performSearch(searchQuery: string) {
        // Perform your search operation here with the searchQuery value
        console.log('Search query:', searchQuery);
        // You can replace the console.log with your actual search logic
      }
    
      openFilters() {
        // Handle filter action
        console.log('Open filters clicked');
        // Implement filter logic here
      }
      `,
    },
  };

  ngOnInit(): void {
    if (this.isButton) {
      this.currentCode = this.componentCode.button;
    } else {
      this.currentCode = this.componentCode.input;
    }
  }

  toggleCodeView() {
    this.showCode = !this.showCode;
  }
}
