import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

  contacts = [
    {
      title: 'GitHub',
      icon: 'fab fa-github',
      link: 'https://github.com/Raghavendra-Devale'
    },
    {
      title: 'LinkedIn',
      icon: 'fab fa-linkedin',
      link: 'https://linkedin.com/in/raghavendra-devale'
    },
    {
      title: 'Email',
      icon: 'fas fa-envelope',
      link: 'mailto:raghavendradevale07@gmail.com'
    }
  ];

}