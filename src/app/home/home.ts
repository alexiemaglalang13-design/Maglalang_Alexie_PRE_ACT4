import { Component } from '@angular/core';
import { Header } from '../header/header';
import { ProfileCard } from '../profile-card/profile-card';
import { Skills } from '../skills/skills';
import { Footer } from '../footer/footer';
import { Proficiency } from '../proficiency';

@Component({
  selector: 'app-home',
  imports: [Header, ProfileCard, Skills, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  // The Home page owns all CV data and passes it down to the children.
  fullName = 'Alexie T. Maglalang';
  location = 'Angeles City, Pampanga';
  email = 'alexiemaglalang13@gmail.com';
  phone = '0918 035 7724';

  education = 'Bachelor of Science in Information Technology';
  school = 'Holy Angel University';
  schoolLocation = 'Angeles City, Pampanga';
  educationYears = '2024 - 2028';

  profile = 'Aspiring front-end developer with hands-on experience in HTML, CSS, JavaScript, TypeScript, and Angular. Detail-oriented, with a focus on building clean, responsive web pages. Ultimately, I am seeking an opportunity to apply my skills in a real-world setting and grow as a developer.';

  skills = [
    'HTML and CSS',
    'JavaScript',
    'TypeScript',
    'Angular'
  ];

  proficiencies: Proficiency[] = [
    { tool: 'Visual Studio Code', level: 'Advanced' },
    { tool: 'Git and GitHub', level: 'Intermediate' },
    { tool: 'Node.js and npm', level: 'Intermediate' },
    { tool: 'Angular CLI', level: 'Beginner' }
  ];

  projects = [
    'Hain Na - Restaurant Ordering and Reservation System',
    'Dineamics - Multi-Cuisine Restaurant Website',
    'Digify - Digital Services Website'
  ];

  message = 'Click any skill above to select it.';

  // Runs when the Skills component emits a skillSelected event.
  onSkillSelected(skill: string) {
    this.message = `You selected: ${skill}`;
  }
}
