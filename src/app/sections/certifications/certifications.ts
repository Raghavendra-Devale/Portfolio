import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  imports: [],
  templateUrl: './certifications.html',
  styleUrl: './certifications.scss',
})
export class Certifications {
  certificationsList = [
    {
      title: 'Java Spring Framework, Spring Boot, Spring AI - Gen AI',
      issuer: 'Udemy',
      icon: '🍃',
      link: 'https://www.udemy.com/certificate/UC-2d2c0fe6-77d2-4a21-bc33-f13047533251/'
    },
    {
      title: 'Postman Student Expert',
      issuer: 'Postman Academy',
      icon: '🏆'
    },
    {
      title: 'Introduction to SQL',
      issuer: 'Simplilearn',
      icon: '📊'
    }
  ];

  leadershipList = [
    {
      title: 'Student Representative',
      organization: 'Grievance Redressal Cell',
      icon: '🤝'
    },
    {
      title: 'Campus Ambassador',
      organization: 'Rooman Technologies',
      icon: '📣'
    },
    {
      title: 'Project Expo Presenter',
      organization: 'SJMIT Expo',
      icon: '💡'
    }
  ];
}
