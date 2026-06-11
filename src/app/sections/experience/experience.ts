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
        'Developed and maintained web application features using Angular and Java backend.',
        'Assisted in building and modifying REST APIs using Spring Boot.',
        'Integrated frontend components with backend services and database layers.',
        'Participated in debugging and resolving application issues to improve reliability.',
        'Worked with MySQL/PostgreSQL for data storage and basic query operations.'
      ]
    },
    {
      role: 'Campus Ambassador',
      company: 'Rooman Technologies',
      duration: '2024 - 2025',
      points: [
        'Organized and promoted technical learning initiatives and awareness sessions.',
        'Guided students on certifications, workshops, and career development opportunities.',
        'Developed leadership, organization, and professional communication skills.'
      ]
    },
    {
      role: 'Trainee Apprentice',
      company: 'Bharat Electronics Limited (BEL)',
      duration: 'Nov 2021 - Nov 2022',
      points: [
        'Assisted in understanding system workflows and basic software operations.',
        'Supported documentation and learning of system-level processes under guidance.'
      ]
    }
  ];

}