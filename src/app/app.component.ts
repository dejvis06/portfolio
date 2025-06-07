import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from '../pages/hero-section/hero-section.component';
import { AboutMeComponent } from '../pages/about-me/about-me.component';
import { StatsComponent } from '../pages/stats/stats.component';
import { SkillsComponent } from '../pages/skills/skills.component';
import { TestimonialsComponent } from '../pages/testimonials/testimonials.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { PortfolioComponent } from '../pages/portfolio/portfolio.component';
import { ResumeComponent } from '../pages/resume/resume.component';
import { ServicesComponent } from '../pages/services/services.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroSectionComponent,
    AboutMeComponent,
    ContactComponent,
    HeroSectionComponent,
    PortfolioComponent,
    ResumeComponent,
    ServicesComponent,
    SkillsComponent,
    StatsComponent,
    TestimonialsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
