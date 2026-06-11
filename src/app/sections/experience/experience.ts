import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {

  experiences = [
    {
      role: 'Software Developer',
      company: 'DFIVE Technologies',
      duration: 'Nov 2025 - Present',
      points: [
        'Developing Angular and Spring Boot applications',
        'Building REST APIs',
        'Database integration using PostgreSQL and MySQL',
        'Authentication and authorization implementation'
      ]
    },
    {
      role: 'Student Ambassador',
      company: 'Rooman Technologies',
      duration: '2024 - 2025',
      points: [
        'Promoted technical learning initiatives',
        'Organized workshops and awareness sessions',
        'Guided students on certifications and career development',
        'Developed leadership and communication skills'
      ]
    },
    {
      role: 'Technical Apprentice',
      company: 'Bharat Electronics Limited',
      duration: 'Nov 2021 - Nov 2022',
      points: [
        'Worked with technical teams',
        'Learned SDLC practices',
        'Used IBM Rational ALM',
        'Contributed to documentation and quality processes'
      ]
    }
  ];

}