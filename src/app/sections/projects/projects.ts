import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  github: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

  projects: Project[] = [

    {
      title: 'Knowledge Mesh AI',
      category: 'AI / RAG',
      description:
        'AI-powered knowledge retrieval system using RAG architecture and local LLMs to provide context-aware answers from custom knowledge bases.',
      technologies: [
        'Python',
        'FastAPI',
        'RAG',
        'Local LLM',
        'Vector Search'
      ],
      github: 'https://github.com/Raghavendra-Devale/knowledge-mesh-ai',
      featured: true
    },

    {
      title: 'Chatbot Capsule',
      category: 'AI / PDF Chat',
      description:
        'Document-aware chatbot capable of answering questions from uploaded PDFs using embeddings and retrieval techniques.',
      technologies: [
        'Python',
        'FastAPI',
        'PDF Processing',
        'LLM',
        'RAG'
      ],
      github: 'https://github.com/Raghavendra-Devale/chatbot-capsule',
      featured: true
    },

    {
      title: 'Botiq Web',
      category: 'Full Stack',
      description:
        'Spring Boot and Angular application with reusable backend APIs and modular architecture.',
      technologies: [
        'Spring Boot',
        'Angular',
        'Java',
        'REST API'
      ],
      github: 'https://github.com/Raghavendra-Devale/Botiq-web',
      featured: false
    },

    {
      title: 'AlphaFinSync',
      category: 'Backend',
      description:
        'Stock market backend service integrating AlphaVantage APIs for financial data retrieval.',
      technologies: [
        'Java',
        'Spring Boot',
        'AlphaVantage',
        'REST API'
      ],
      github: 'https://github.com/Raghavendra-Devale/AlphaFinSync',
      featured: false
    },

    {
      title: 'Carpenter Gallery',
      category: 'Apps Script',
      description:
        'Google Apps Script based business application deployed using the Google ecosystem.',
      technologies: [
        'Google Apps Script',
        'JavaScript'
      ],
      github: 'https://github.com/Raghavendra-Devale/carpenter-gallery',
      featured: false
    },

    {
      title: 'AI Job Recommendation Platform',
      category: 'In Progress',
      description:
        'AI-powered platform that analyzes resumes and recommends relevant jobs using modern AI workflows.',
      technologies: [
        'Spring Boot',
        'Angular',
        'PostgreSQL',
        'JWT',
        'AI'
      ],
      github: '',
      featured: false
    }

  ];

}