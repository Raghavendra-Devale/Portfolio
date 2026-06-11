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
