import { Component, signal, HostListener, Inject, OnInit, AfterViewInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./sections/navbar/navbar";
import { Hero } from "./sections/hero/hero";
import { About } from "./sections/about/about";
import { Services } from "./sections/services/services";
import { Education } from "./sections/education/education";
import { Experience } from "./sections/experience/experience";
import { Skills } from "./sections/skills/skills";
import { Projects } from "./sections/projects/projects";
import { Certifications } from "./sections/certifications/certifications";
import { Contact } from "./sections/contact/contact";
import { Footer } from "./sections/footer/footer";

interface BackgroundBox {
  width: string;
  height: string;
  left: string;
  top: string;
}

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    Navbar, 
    Hero, 
    About, 
    Services,
    Education,
    Experience, 
    Skills, 
    Projects, 
    Certifications,
    Contact, 
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, AfterViewInit {
  protected readonly title = signal('portfolio');
  public showScrollTop = false;
  public boxes = signal<BackgroundBox[]>([]);
  private isBrowser = false;
  private follower: HTMLElement | null = null;
  private dot: HTMLElement | null = null;
  private mouseX = 0;
  private mouseY = 0;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      if (!isTouchDevice) {
        document.body.classList.add('cursor-active');
      }
    }
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      if (!isTouchDevice) {
        this.follower = document.getElementById('cursor-follower');
        this.dot = document.getElementById('cursor-dot');
      }
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (!this.isBrowser) return;
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    this.showScrollTop = scrolled > 300;
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.isBrowser) return;

    const posX = event.clientX;
    const posY = event.clientY;

    if (this.follower) {
      this.follower.animate(
        [
          { left: `${posX}px`, top: `${posY}px` }
        ],
        { duration: 250, fill: 'forwards', easing: 'ease-out' }
      );
    }

    if (this.dot) {
      this.dot.style.left = `${posX}px`;
      this.dot.style.top = `${posY}px`;
    }
  }

  @HostListener('document:mouseover', ['$event'])
  onMouseOver(event: MouseEvent) {
    if (!this.isBrowser || !this.follower || !this.dot) return;
    const target = event.target as HTMLElement;
    if (target.closest('a, button, .project-card, .skill-card, .btn, [role="button"], .timeline-content, .contact-card')) {
      this.follower.style.width = '45px';
      this.follower.style.height = '45px';
      this.follower.style.borderColor = 'var(--primary)';
      this.dot.style.transform = 'translate(-50%, -50%) scale(1.5)';
      this.dot.style.backgroundColor = 'var(--primary)';
    }
  }

  @HostListener('document:mouseout', ['$event'])
  onMouseOut(event: MouseEvent) {
    if (!this.isBrowser || !this.follower || !this.dot) return;
    const target = event.target as HTMLElement;
    if (target.closest('a, button, .project-card, .skill-card, .btn, [role="button"], .timeline-content, .contact-card')) {
      this.follower.style.width = '30px';
      this.follower.style.height = '30px';
      this.follower.style.borderColor = 'rgba(212, 255, 61, 0.6)';
      this.dot.style.transform = 'translate(-50%, -50%) scale(1)';
      this.dot.style.backgroundColor = 'var(--primary)';
    }
  }

  scrollToTop() {
    if (this.isBrowser) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
