import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register01',
  templateUrl: './register01.component.html',
  styleUrls: ['./register01.component.scss']
})
export class Register01Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    document.querySelector('body')?.classList.remove('horizontal', 'horizontal-hover')
    document.querySelector('body')?.classList.add('sidebar-mini')
  }
}
