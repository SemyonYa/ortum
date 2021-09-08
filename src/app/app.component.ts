import { Component, ElementRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { menuBackAnimation } from 'src/animations/menu-back.animation';
import { menuAnimation } from 'src/animations/menu.animation';
import { MenuItem } from 'src/components/menu-item/menu-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [menuAnimation, menuBackAnimation]
})
export class AppComponent {

  title = 'ortum';
  menuVisible: boolean = false;
  asideVisible: boolean = false;
  callMeMinified: boolean = true;

  constructor(private router: Router) {
    this.router.events
      .subscribe(
        e => {
          if (e instanceof NavigationEnd) {
            this.toggleMenuItem(e.url);
            this.hideMenu();
          }
        }
      );
  }

  private menu: MenuItem[] = [
    { id: 1, title: 'Главная', route: '/' } as MenuItem,
    {
      id: 2, title: 'О клинике', route: '/about', withoutFullMatch: true, children: [
        { id: 21, title: 'О клинике', route: '/about' } as MenuItem,
        { id: 22, title: 'Лицензия', route: '/about/license' } as MenuItem,
        { id: 23, title: 'Персонал', route: '/about/personal' } as MenuItem,
        { id: 24, title: 'Вакансии', route: '/about/positions' } as MenuItem,
        { id: 25, title: 'Фото??', route: '/about/galery' } as MenuItem,
      ]
    } as MenuItem,
    {
      id: 3, title: 'Услуги', route: '/services', withoutFullMatch: true, children: [
        { id: 31, title: 'Услуги', route: '/services' } as MenuItem,
        { id: 32, title: 'Программы', route: '/services/programs' } as MenuItem,
        { id: 33, title: 'Прайс-лист', route: '/services/price' } as MenuItem,
      ]
    } as MenuItem,
    { id: 4, title: 'Статьи', route: '/articles', withoutFullMatch: true } as MenuItem,
    { id: 5, title: 'Контакты', route: '/contact' } as MenuItem,
  ];

  showMenu() {
    document.querySelector('body').style.overflowY = 'hidden'
    this.asideVisible = true;
    setTimeout(() => {
      this.menuVisible = true;
    }, 100);
  }

  hideMenu() {
    this.menuVisible = false;
    setTimeout(() => {
      this.asideVisible = false;
      document.querySelector('body').style.overflowY = 'auto'
    }, 100);
  }

  toggleMenu() {
    if (!this.menuVisible) {
      this.showMenu();
    } else {
      this.hideMenu();
    }
  }

  backClick(e: MouseEvent) {
    if ((e.target as HTMLElement).nodeName.toLowerCase() === 'aside') {
      if (this.menuVisible) {
        this.hideMenu();
      } else {
        this.showMenu();
      }
    }
  }

  toggleMenuItem(menuItemRoute: string) {
    this.menu.forEach(mi => {
      mi.expanded = mi.route == menuItemRoute;
      if (mi.children && mi.children.length > 0) {
        let expanded = false;
        mi.children.forEach(mic => {
          expanded = expanded || (mic.route == menuItemRoute);
        });
        mi.expanded = expanded;
      }
    });
  }

  toggleCallMe() {
    this.callMeMinified = !this.callMeMinified;
  }
}
