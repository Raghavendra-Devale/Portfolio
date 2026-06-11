import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit, OnDestroy {
  roles = ['Software Developer', 'Full-Stack Developer', 'Spring Boot Developer', '<Angular-Dev />', 'AI & RAG Researcher'];
  typedText = '';
  private currentRoleIndex = 0;
  private currentCharIndex = 0;
  private isDeleting = false;
  private typingTimeout: any;
  private isBrowser = false;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.handleTyping();
    }
  }

  ngOnDestroy() {
    if (this.typingTimeout) {
      clearTimeout(this.typingTimeout);
    }
  }

  handleTyping() {
    const currentRole = this.roles[this.currentRoleIndex];
    
    if (this.isDeleting) {
      this.typedText = currentRole.substring(0, this.currentCharIndex - 1);
      this.currentCharIndex--;
    } else {
      this.typedText = currentRole.substring(0, this.currentCharIndex + 1);
      this.currentCharIndex++;
    }

    let typeSpeed = 100;
    if (this.isDeleting) {
      typeSpeed = 50;
    }

    if (!this.isDeleting && this.currentCharIndex === currentRole.length) {
      typeSpeed = 1500; // Wait at full word
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false;
      this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
      typeSpeed = 500; // Wait before typing next
    }

    this.typingTimeout = setTimeout(() => this.handleTyping(), typeSpeed);
  }
}
