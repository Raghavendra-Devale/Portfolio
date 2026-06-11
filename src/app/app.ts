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
      this.generateBackgroundBoxes(isTouchDevice);
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

  private generateBackgroundBoxes(isTouchDevice: boolean) {
    const boxCount = isTouchDevice ? 6 : 15;
    const generatedBoxes: BackgroundBox[] = [];
    for (let i = 0; i < boxCount; i++) {
      const size = Math.random() * 120 + 50; // 50px to 170px
      generatedBoxes.push({
        width: `${size}px`,
        height: `${size}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      });
    }
    this.boxes.set(generatedBoxes);
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (!this.isBrowser) return;
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    this.showScrollTop = scrolled > 300;
    this.updateBackgroundParallax(scrolled);
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

    this.mouseX = (posX / window.innerWidth) - 0.5;
    this.mouseY = (posY / window.innerHeight) - 0.5;

    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    this.updateBackgroundParallax(scrolled);
  }

  @HostListener('document:mouseover', ['$event'])
  onMouseOver(event: MouseEvent) {
    if (!this.isBrowser || !this.follower || !this.dot) return;
    const target = event.target as HTMLElement;
    if (target.closest('a, button, .project-card, .skill-card, .btn, [role="button"], .timeline-content, .contact-card')) {
      this.follower.style.width = '45px';
      this.follower.style.height = '45px';
      this.follower.style.borderColor = 'var(--accent-purple)';
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
      this.follower.style.borderColor = 'rgba(56, 189, 248, 0.6)';
      this.dot.style.transform = 'translate(-50%, -50%) scale(1)';
      this.dot.style.backgroundColor = 'var(--accent-purple)';
    }
  }

  private updateBackgroundParallax(scrolled: number) {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const boxes = document.querySelectorAll('.floating-box');
    boxes.forEach((box, index) => {
      const mSpeed = (index + 1) * 0.25;
      const sSpeed = (index % 3 + 1) * 0.08;
      
      const x = this.mouseX * mSpeed * 50;
      const y = (this.mouseY * mSpeed * 50) + (scrolled * sSpeed);
      
      (box as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
    });
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
