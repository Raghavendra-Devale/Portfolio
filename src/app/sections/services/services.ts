import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  servicesList = [
    {
      title: 'Custom Project Development',
      icon: 'bx bx-code-block',
      description: 'I build robust, scalable, and responsive web applications from scratch, tailored to your specific system requirements.'
    },
    {
      title: 'API Design & Integration',
      icon: 'bx bx-plug',
      description: 'Designing clean RESTful APIs with secure JWT authentication and integration with third-party systems and databases.'
    },
    {
      title: 'Consultation & Bug Fixing',
      icon: 'bx bx-bug-alt',
      description: 'Stuck with a bug or system bottleneck? I debug complex application workflows and provide technical consultation for optimization.'
    }
  ];
}
