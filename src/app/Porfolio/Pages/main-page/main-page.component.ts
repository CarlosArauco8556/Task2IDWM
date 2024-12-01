import { Component } from '@angular/core';
import { NavbarComponent } from '../../Components/navbar/navbar.component';
import { HomeComponent } from '../../Components/home/home.component';
import { DescriptionComponent } from '../../Components/description/description.component';
import { SkillsComponent } from '../../Components/skills/skills.component';
import { ProjectsComponent } from '../../Components/projects/projects.component';
import { ContactFormComponent } from '../../Components/contact-form/contact-form.component';

@Component({
  selector: 'main-page',
  standalone: true,
  imports: [NavbarComponent, HomeComponent, DescriptionComponent, SkillsComponent, ProjectsComponent, ContactFormComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
