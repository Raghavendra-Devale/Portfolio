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
      title: 'Email',
      icon: 'bx bxs-envelope',
      value: 'raghavendradevale07@gmail.com',
      link: 'mailto:raghavendradevale07@gmail.com',
      desc: 'Drop me an email anytime'
    },
    {
      title: 'Phone',
      icon: 'bx bxs-phone',
      value: '+91 76765 00120',
      link: 'tel:+917676500120',
      desc: 'Available for discussions'
    },
    {
      title: 'LinkedIn',
      icon: 'bx bxl-linkedin-square',
      value: 'raghavendra-devale',
      link: 'https://linkedin.com/in/raghavendra-devale',
      desc: 'Let\'s network professionally'
    },
    {
      title: 'GitHub',
      icon: 'bx bxl-github',
      value: 'Raghavendra-Devale',
      link: 'https://github.com/Raghavendra-Devale',
      desc: 'Check out my repositories'
    }
  ];

}