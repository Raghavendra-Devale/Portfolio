import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {

  skillCategories = [
    {
      title: 'Backend',
      skills: [
        'Java',
        'Spring Boot',
        'REST APIs',
        'JWT Authentication'
      ]
    },
    {
      title: 'Frontend',
      skills: [
        'Angular',
        'TypeScript',
        'HTML',
        'CSS',
        'Bootstrap'
      ]
    },
    {
      title: 'Database',
      skills: [
        'MySQL',
        'PostgreSQL'
      ]
    },
    {
      title: 'AI & Tools',
      skills: [
        'RAG',
        'LLMs',
        'Git',
        'GitHub',
        'Postman'
      ]
    }
  ];

}