import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  //Variable to store the active link.
  activeSection: string = '';
  scrolled: boolean = false;

  // Function to change the active link when the user scrolls.
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.scrolled = scrollTop > 50; // Change the value to the desired scroll value.
  }
  //Function to scroll to the section.
  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.activeSection = sectionId; 
    }
  }
  
  //Function to verify if the section is active.
  isActive(link: string): boolean {
    return this.activeSection === link;
  }
}
