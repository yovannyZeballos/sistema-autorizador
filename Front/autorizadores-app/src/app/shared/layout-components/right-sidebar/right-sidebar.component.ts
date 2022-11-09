import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { SwitcherService } from '../../services/switcher.service';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss']
})
export class RightSidebarComponent implements OnInit {
  layoutSub!: Subscription;
  isOpen: boolean = false;

  @ViewChild('sidebar', {static: false}) sidebar!: ElementRef;
  constructor(private renderer: Renderer2, private layoutService: SwitcherService) { 
    this.layoutSub = layoutService.SidebarNotifyChangeEmitted.subscribe( value => {
        if (this.isOpen) {
          this.renderer.removeClass(this.sidebar.nativeElement, 'sidebar-open');
          this.isOpen = false;
        }
        else {
          this.renderer.addClass(this.sidebar.nativeElement, 'sidebar-open');
          this.isOpen = true;
        }
      }
    );
  }

  ngOnInit(): void {
    
  }
  
  onClose(){
    this.renderer.removeClass(this.sidebar.nativeElement, 'sidebar-open');
    this.isOpen = false;
  }

  
  ngOnDestroy(){
    if (this.layoutSub) {
      this.layoutSub.unsubscribe();
    }
  }
}
