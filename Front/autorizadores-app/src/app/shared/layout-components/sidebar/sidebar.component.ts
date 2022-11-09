import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import {
  Component,
  ViewEncapsulation,
  HostListener,
  ElementRef,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { fromEvent, Subscription } from 'rxjs';
import { ProductdetailsService } from '../../services/e-commerce/productdetails.service';
import { Menu, NavService } from '../../services/nav.service';
import { checkHoriMenu, switcherArrowFn } from './sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent {
  public menuItems!: Menu[];
  public url: any;
  public windowSubscribe$!: Subscription;
  public routerSubscription$!: Subscription;
  public menuitemsSubscribe$!: Subscription;
  constructor(
    private router: Router,
    private navServices: NavService,
    public elRef: ElementRef,
    private breakpointObserver: BreakpointObserver,
    private ProductdetailsService: ProductdetailsService
  ) {}

  ngOnInit(): void {
    this.menuitemsSubscribe$ = this.navServices.items.subscribe(
      (items) => (this.menuItems = items)
    );

    this.checkCurrentPath(location.pathname);
    this.routerSubscription$ = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkCurrentPath(event.url);
        if (document.body.classList.contains('horizontal') && window.innerWidth >= 992) {
          this.closeNavActive();
        }
      }
    });

    switcherArrowFn();

    this.breakpointObserver
      .observe(['(max-width: 991px)'])
      .subscribe((result: BreakpointState) => {
        if (result.matches) {
          // small screen
          this.checkCurrentPath(location.pathname);
        } else {
          // large screen
          document
            .querySelector('body.horizontal')
            ?.classList.remove('sidenav-toggled');
          if (document.querySelector('.horizontal')) {
            this.closeNavActive();
          } else {
            this.checkCurrentPath(location.pathname);
          }
        }
      });

    let vertical: any = document.querySelectorAll('#myonoffswitch34');
    let horizontal: any = document.querySelectorAll('#myonoffswitch35');
    let horizontalHover: any = document.querySelectorAll('#myonoffswitch111');
    let maincontent: any = document.querySelectorAll('.main-content');
    fromEvent(vertical, 'click').subscribe(() => {
      this.checkCurrentPath(location.pathname);
    });
    fromEvent([horizontal, horizontalHover], 'click').subscribe(() =>
      this.closeNavActive()
    );
    fromEvent(maincontent, 'click').subscribe(() => {
      if (document.querySelector('body')?.classList.contains('horizontal')) {
        this.closeNavActive();
      }
    });

    const WindowResize = fromEvent(window, 'resize');
    // subscribing the Observable
    this.windowSubscribe$ = WindowResize.subscribe(() => {
      // to check and adjst the menu on screen size change
      checkHoriMenu();
    });

    this.ProductdetailsService.dynamicProductId.subscribe((value) => {
      if (value !== null || value !== undefined) {
        if (value.match('/ecommerce/products-details/'))
          this.checkCurrentPath('/ecommerce/products');
        // any other path like invoice or other.
      }
    });
  }
  checkCurrentPath(event) {
    this.menuItems.filter((firstLevel) => {
      if (firstLevel.path === event) {
        this.setNavActive(event);
      }
      if (!firstLevel.children) {
        return;
      }
      firstLevel.children.filter((secondlevel) => {
        if (secondlevel.path === event) {
          this.setNavActive(secondlevel);
        }
        if (!secondlevel.children) {
          return;
        }
        secondlevel.children.filter((thirdlevel) => {
          if (thirdlevel.path === event) {
            this.setNavActive(thirdlevel);
          }
          if (!thirdlevel.children) {
            return;
          }
          thirdlevel.children.filter((fourthlevel) => {
            if (fourthlevel.path === event) {
              this.setNavActive(fourthlevel);
            }
          });
        });
      });
    });
  }
  toggleNavActive(item: any) {
    if (!item.active) {
      this.menuItems.forEach((firstlevel: any) => {
        if (this.menuItems.includes(item)) {
          firstlevel.active = false;
        }
        if (!firstlevel.children) return;

        firstlevel.children.forEach((secondlevel: any) => {
          if (firstlevel.children.includes(item)) {
            secondlevel.active = false;
          }
          if (!secondlevel.children) return;

          secondlevel.children.forEach((thirdlevel: any) => {
            if (secondlevel.children.includes(item)) {
              thirdlevel.active = false;
            }
            if (!thirdlevel.children) return;

            thirdlevel.children.forEach((fourthlevel: any) => {
              if (thirdlevel.children.includes(item)) {
                fourthlevel.active = false;
              }
              if (!fourthlevel.children) return;
            });
          });
        });
      });
    }
    item.active = !item.active;
  }
  setNavActive(item: any) {
    console.log(item);

    this.menuItems.filter((main) => {
      if (main !== item) {
        main.active = false;
        main.selected = false;
      }
      if (main.children && main.children.includes(item)) {
        main.active = true;
        main.selected = true;
      }
      if (main.children) {
        main.children.filter((secondlevel) => {
          if (secondlevel !== item) {
            secondlevel.active = false;
            secondlevel.selected = false;
          }
          if (secondlevel.children && secondlevel.children.includes(item)) {
            main.active = true;
            main.selected = true;
            secondlevel.active = true;
            secondlevel.selected = true;
          }
          if (secondlevel.children) {
            secondlevel.children.filter((thirdlevel) => {
              if (thirdlevel !== item) {
                thirdlevel.active = false;
                thirdlevel.selected = false;
              }
              if (thirdlevel.children && thirdlevel.children.includes(item)) {
                main.active = true;
                main.selected = true;
                secondlevel.active = true;
                secondlevel.selected = true;
                thirdlevel.active = true;
                thirdlevel.selected = true;
              }
              if (thirdlevel.children) {
                thirdlevel.children.filter((fourthlevel) => {
                  if (fourthlevel !== item) {
                    fourthlevel.active = false;
                    fourthlevel.selected = false;
                  }
                  if (
                    fourthlevel.children &&
                    fourthlevel.children.includes(item)
                  ) {
                    main.active = true;
                    main.selected = true;
                    secondlevel.active = true;
                    secondlevel.selected = true;
                    thirdlevel.active = true;
                    thirdlevel.selected = true;
                    fourthlevel.active = true;
                    fourthlevel.selected = true;
                  }
                });
              }
            });
          }
        });
      }
    });
  }
  closeNavActive() {
    this.menuItems.filter((main) => {
      main.active = false;
      if (main.children) {
        main.children.filter((secondlevel) => {
          secondlevel.active = false;
          if (secondlevel.children) {
            secondlevel.children.filter((thirdlevel) => {
              thirdlevel.active = false;
              if (thirdlevel.children) {
                thirdlevel.children.filter((fourthlevel) => {
                  fourthlevel.active = false;
                });
              }
            });
          }
        });
      }
    });
  }

  sidebarClose() {
    if ((this.navServices.collapseSidebar = true)) {
      document.querySelector('.app')?.classList.remove('sidenav-toggled');
      this.navServices.collapseSidebar = false;
    }
  }

  scrolled: boolean = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 70;
  }

  ngOnDestroy() {
    // unsubscribing the Observable
    this.menuitemsSubscribe$.unsubscribe();
    this.routerSubscription$.unsubscribe();
    this.windowSubscribe$.unsubscribe();
  }

  

}
