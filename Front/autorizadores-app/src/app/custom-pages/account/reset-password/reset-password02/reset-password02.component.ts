import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password02',
  templateUrl: './reset-password02.component.html',
  styleUrls: ['./reset-password02.component.scss']
})
export class ResetPassword02Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    document.querySelector('body')?.classList.remove('horizontal', 'horizontal-hover')
    document.querySelector('body')?.classList.add('sidebar-mini')
  }
}
