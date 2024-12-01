import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  //Variable to store the active link.
  activeLink: string = 'home';

  //Function to activate the link.
  setActive(link: string): void {
    this.activeLink = link;
  }
  
  //Function to verify if the link is active.
  isActive(link: string): boolean {
    return this.activeLink === link;
  }
}
