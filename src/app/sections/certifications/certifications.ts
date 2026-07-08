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
      title: 'Claude Code 101',
      issuer: 'Anthropic',
      icon: '💻',
      link: 'https://verify.skilljar.com/c/2epebkd5tus6'
    },
    {
      title: 'Anthropic AI Fluency',
      issuer: 'Anthropic',
      icon: '🤖',
      link: 'https://verify.skilljar.com/c/nv2nau4jqzui'
    },
    {
      title: 'Postman Student Expert',
      issuer: 'Postman Academy',
      icon: '🏆',
      link: 'https://badges.parchment.com/public/assertions/MSD9L5tgQI28k8BsQNXkMQ?utm_source=url_copy&identity__email=raghavendradevale07%40gmail.com'
    },
    {
      title: 'Introduction to SQL',
      issuer: 'Simplilearn',
      icon: '📊',
      link: 'https://simpli-web.app.link/e/YpBtXocdB4b'
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
