import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  public isCollapsed = false;
  public isClosed = false;
  public isCollapsed1 = false;
  public isClosed1 = false;
  public isClosed2 = false;
  public isCollapsed2 = true;
  public isClosed3 = false;
  public isCollapsed3 = false;
  public isClosed4 = false;
  public isCollapsed4 = false;
  public isClosed5 = false;
  public isCollapsed5 = false;
  public isClosed6 = false;
  public isCollapsed6 = false;
  public isClosed7 = false;
  public isCollapsed7 = false;
  public isClosed8 = false;
  public isCollapsed8 = false;
  public isClosed9 = false;
  public isCollapsed9 = false;
  public isClosed10 = false;
  public isCollapsed10 = false;
  public isClosed11 = false;
  public isCollapsed11 = false;
  public isClosed12 = false;
  public isCollapsed12 = false;
  public isClosed13 = false;
  public isCollapsed13 = false;
  public isClosed14 = false;
  public isCollapsed14 = false;
  public isClosed15 = false;
  public isCollapsed15 = false;

  toggleClass = "fe fe-maximize";
  public fullScreen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  Collapsetoggle() {
    this.isCollapsed = !this.isCollapsed;
  }
  Closetoggle() {
    this.isClosed = true
  }
  Collapsetoggle1() {
    this.isCollapsed1 = !this.isCollapsed1;
  }
  Closetoggle1() {
    this.isClosed1 = true
  }
  Collapsetoggle2() {
    this.isCollapsed2 = !this.isCollapsed2;
  }
  Closetoggle2() {
    this.isClosed2 = true
  }
  Collapsetoggle3() {
    this.isCollapsed3 = !this.isCollapsed3;
  }
  Closetoggle3() {
    this.isClosed3 = true
  }
  Collapsetoggle4() {
    this.isCollapsed4 = !this.isCollapsed4;
  }
  Closetoggle4() {
    this.isClosed4 = true
  }
  Collapsetoggle5() {
    this.isCollapsed5 = !this.isCollapsed5;
  }
  Closetoggle5() {
    this.isClosed5 = true
  }
  Collapsetoggle6() {
    this.isCollapsed6 = !this.isCollapsed6;
  }
  Closetoggle6() {
    this.isClosed6 = true
  }
  Collapsetoggle7() {
    this.isCollapsed7 = !this.isCollapsed7;
  }
  Closetoggle7() {
    this.isClosed7 = true
  }
  Collapsetoggle8() {
    this.isCollapsed8 = !this.isCollapsed8;
  }
  Closetoggle8() {
    this.isClosed8 = true
  }
  Collapsetoggle9() {
    this.isCollapsed9 = !this.isCollapsed9;
  }
  Closetoggle9() {
    this.isClosed9 = true
  }
  Collapsetoggle10() {
    this.isCollapsed10 = !this.isCollapsed10;
  }
  Closetoggle10() {
    this.isClosed10 = true
  }
  Collapsetoggle11() {
    this.isCollapsed11 = !this.isCollapsed11;
  }
  Closetoggle11() {
    this.isClosed11 = true
  }
  Collapsetoggle12() {
    this.isCollapsed12 = !this.isCollapsed12;
  }
  Closetoggle12() {
    this.isClosed12 = true
  }
  Collapsetoggle13() {
    this.isCollapsed13 = !this.isCollapsed13;
  }
  Closetoggle13() {
    this.isClosed13 = true
  }
  Collapsetoggle14() {
    this.isCollapsed14 = !this.isCollapsed14;
  }
  Closetoggle14() {
    this.isClosed14 = true
  }
  Collapsetoggle15() {
    this.isCollapsed15 = !this.isCollapsed15;
  }
  Closetoggle15() {
    this.isClosed15 = true
  }

  fullScreenToggle() {
    if (this.toggleClass === "fe fe-maximize") {
      this.toggleClass = "fe fe-minimize";
    } else {
      this.toggleClass = "fe fe-maximize";
    }
  }
}
