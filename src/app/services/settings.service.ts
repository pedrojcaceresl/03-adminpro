import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private linkTheme: HTMLLinkElement = document.querySelector('#theme')!;

  constructor() {}

  setTheme() {
    const url =
      localStorage.getItem('theme') || './assets/css/colors/green-dark.css';

    this.linkTheme.setAttribute('href', url);
  }

  changeTheme(theme: string) {
    const hrefUrl = `./assets/css/colors/${theme}.css`;
    this.linkTheme.setAttribute('href', hrefUrl);
    localStorage.setItem('theme', hrefUrl);
    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    const links: NodeListOf<Element> = document.querySelectorAll('.selector');

    links.forEach((link: Element) => {
      link.classList.remove('working');

      const btnTheme = link.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme.getAttribute('href');

      if (btnThemeUrl === currentTheme) {
        link.classList.add('working');
      }
    });
  }
}
