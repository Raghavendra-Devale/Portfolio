import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skillsList = [
    { name: 'Java', icon: 'bx bxl-java' },
    { name: 'Spring Boot', icon: 'fa-solid fa-leaf' },
    { name: 'Angular', icon: 'bx bxl-angular' },
    { name: 'TypeScript', icon: 'bx bxl-typescript' },
    { name: 'JavaScript', icon: 'bx bxl-javascript' },
    { name: 'Python', icon: 'bx bxl-python' },
    { name: 'SQL', icon: 'bx bx-data' },
    { name: 'PostgreSQL', icon: 'bx bx-server' },
    { name: 'MySQL', icon: 'bx bxs-data' },
    { name: 'REST APIs', icon: 'bx bx-code-alt' },
    { name: 'JWT Auth', icon: 'bx bx-key' },
    { name: 'AI & RAG', icon: 'bx bx-brain' },
    { name: 'Git', icon: 'bx bxl-git' },
    { name: 'GitHub', icon: 'bx bxl-github' },
    { name: 'Postman', icon: 'fa-solid fa-paper-plane' },
    { name: 'HTML5', icon: 'bx bxl-html5' },
    { name: 'CSS3', icon: 'bx bxl-css3' }
  ];
}