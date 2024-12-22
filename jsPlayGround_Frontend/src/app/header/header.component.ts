import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit,Renderer2 } from '@angular/core';
import { ThemeServiceService } from '../core/services/theme-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  isDarkTheme = false;
  curentTheme = 'light'

  constructor(private renderer: Renderer2 , private themeService:ThemeServiceService,@Inject(DOCUMENT) private document: Document){}



  ngOnInit(): void {
    // Default to light theme on initialization
    this.curentTheme = this.themeService.getTheme();
    this.themeService.setTheme(this.curentTheme)

  }

  // Toggle between light and dark mode
  toggleTheme(): void {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.curentTheme = this.curentTheme === 'dark' ? 'light' : 'dark';
    this.themeService.setTheme(this.curentTheme)
  }

}
