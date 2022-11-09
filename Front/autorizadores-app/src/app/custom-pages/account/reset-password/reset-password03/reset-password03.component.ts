import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password03',
  templateUrl: './reset-password03.component.html',
  styleUrls: ['./reset-password03.component.scss']
})
export class ResetPassword03Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    document.querySelector('body')?.classList.remove('horizontal', 'horizontal-hover')
    document.querySelector('body')?.classList.add('sidebar-mini')
  }
}
