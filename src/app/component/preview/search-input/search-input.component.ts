import { Component } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
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
}
