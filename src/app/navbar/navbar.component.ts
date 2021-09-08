import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss'],
})
export class NavbarComponent {
  isNavMenuOpen: boolean;
  expandedCategory: HTMLElement;

  expandCategory(categoryItems: HTMLElement) {
    if (window.innerWidth <= 960) {
      this.expandCategoryMobileView(categoryItems);
    } else {
      this.expandCategoryDesktopView(categoryItems);
    }
  }

  expandCategoryMobileView(categoryItems: HTMLElement) {
    if (!categoryItems.classList.contains('expanded')) {
      categoryItems.classList.add('expanded');
    } else {
      categoryItems.classList.remove('expanded');
    }
  }

  expandCategoryDesktopView(categoryItems: HTMLElement) {
    if (this.expandedCategory === categoryItems) {
      this.expandedCategory.classList.remove('expanded');
      this.expandedCategory = null;
    } else {
      if (this.expandedCategory) {
        this.expandedCategory.classList.remove('expanded');
      }
      categoryItems.classList.add('expanded');
      this.expandedCategory = categoryItems;
    }
  }

  expandNavMenu() {
    this.isNavMenuOpen = !this.isNavMenuOpen;
  }
}
