import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any[] = [
    {
      titulo: 'Dashboard',
      icon: 'mdi mdi-gauge',
      subMenu: [
        { titulo: 'Main', url: '/' },
        { titulo: 'Progressbar', url: 'progress' },
        { titulo: 'Grafica', url: 'grafica1' },
      ],
    },

  ];

  constructor() {}
}
