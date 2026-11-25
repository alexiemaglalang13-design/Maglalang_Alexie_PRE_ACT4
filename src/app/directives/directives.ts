import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Proficiency } from '../proficiency';

@Component({
  selector: 'app-directives',
  imports: [FormsModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css'
})
export class Directives {
  // @if
  showProjects = true;

  // @for
  projects = [
    { name: 'Hain Na - Restaurant Ordering and Reservation System', tech: 'MEVN Stack' },
    { name: 'Dineamics - Multi-Cuisine Restaurant Website', tech: 'JavaScript, HTML, and CSS' },
    { name: 'Digify - Digital Services Website', tech: 'React, Vite, Node.js, Express.js, HTML, and CSS' }
  ];

  // @switch
  selectedLevel = 'All';
  proficiencies: Proficiency[] = [
    { tool: 'Visual Studio Code', level: 'Advanced' },
    { tool: 'Git and GitHub', level: 'Intermediate' },
    { tool: 'Node.js and npm', level: 'Intermediate' },
    { tool: 'Angular CLI', level: 'Beginner' }
  ];

  toggleProjects() {
    this.showProjects = !this.showProjects;
  }

  filteredProficiencies() {
    if (this.selectedLevel === 'All') {
      return this.proficiencies;
    }
    return this.proficiencies.filter(item => item.level === this.selectedLevel);
  }
}
