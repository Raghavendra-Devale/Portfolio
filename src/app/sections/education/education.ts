import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  educationList = [
    {
      degree: 'B.E. in Computer Science and Engineering',
      institution: 'S J M Institute of Technology, Chitradurga',
      duration: '2022 - 2025',
      grade: 'CGPA: 8.66 / 10'
    },
    {
      degree: 'Diploma in Computer Science and Engineering',
      institution: 'D R R Govt Polytechnic, Davangere',
      duration: '2017 - 2021',
      grade: 'Percentage: 60%'
    }
  ];
}
