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

  //Function to scroll to the section.
  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80;
      const sectionPosition = section.offsetTop;
      window.scrollTo({ top: sectionPosition - offset, behavior: 'smooth'});
      this.activeSection = sectionId; 
    }
  }
  
  //Function to verify if the section is active.
  isActive(link: string): boolean {
    return this.activeSection === link;
  }
}
