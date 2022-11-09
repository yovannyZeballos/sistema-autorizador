import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout-components/header/header.component';
import { SidebarComponent } from './layout-components/sidebar/sidebar.component';
import { ErrorComponent } from './layout-components/layout/error/error.component';
import { ContentComponent } from './layout-components/layout/content/content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SwitcherComponent } from './layout-components/switcher/switcher.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AccountComponent } from './layout-components/layout/account/account.component';
import { SupportSystemComponent } from './layout-components/layout/support-system/support-system.component';
import { SupportHeaderComponent } from './layout-components/support-header/support-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RightSidebarComponent } from './layout-components/right-sidebar/right-sidebar.component';
import { FooterComponent } from './layout-components/footer/footer.component';
import { FullscreenDirective } from './directives/fullscreen-toggle.directive';
import { PageHeaderComponent } from './layout-components/page-headers/page-header/page-header.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {MatDialogModule} from '@angular/material/dialog';
import { HrDashboardPageHeaderModalComponent } from './layout-components/page-headers/hr-dashboard-page-header-modal/hr-dashboard-page-header-modal.component';
import { HrDashboardPageHeaderComponent } from './layout-components/page-headers/hr-dashboard-page-header/hr-dashboard-page-header.component';
import { TaskDashboardPageHeaderComponent } from './layout-components/page-headers/task-dashboard-page-header/task-dashboard-page-header.component';
import { TaskDashboardPageHeaderModalComponent } from './layout-components/page-headers/task-dashboard-page-header-modal/task-dashboard-page-header-modal.component';
import { JobDashboardPageHeaderComponent } from './layout-components/page-headers/job-dashboard-page-header/job-dashboard-page-header.component';
import { JobDashboardPageHeaderModalComponent } from './layout-components/page-headers/job-dashboard-page-header-modal/job-dashboard-page-header-modal.component';
import { SortableHeader } from './directives/sortable.directive';
import { ColorPickerModule } from 'ngx-color-picker';
import { HoverEffectSidebarDirective } from './directives/hover-effect-sidebar.directive';
import { SidemenuToggleDirective } from './directives/sidemenuToggle';
import { ToggleThemeDirective } from './directives/toggle-theme.directive';
import { LoaderComponent } from './layout-components/loader/loader.component';
import { SupportSwitcherComponent } from './layout-components/support-switcher/support-switcher.component';
import { ToggleSearchDirective } from './directives/toggle-search.directive copy';
import { NgSelectModule } from '@ng-select/ng-select';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false
};

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    ErrorComponent,
    ContentComponent,
    SwitcherComponent,
    AccountComponent,
    SupportSwitcherComponent,
    SupportSystemComponent,
    SupportHeaderComponent,
    RightSidebarComponent,
    FooterComponent,
    FullscreenDirective,
    HoverEffectSidebarDirective, 
    SidemenuToggleDirective,
    ToggleSearchDirective,
    ToggleThemeDirective,
    PageHeaderComponent, 
    HrDashboardPageHeaderComponent,
    HrDashboardPageHeaderModalComponent,
    TaskDashboardPageHeaderComponent,
    TaskDashboardPageHeaderModalComponent,
    JobDashboardPageHeaderComponent,
    JobDashboardPageHeaderModalComponent,
    SortableHeader,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    RouterModule,
    PerfectScrollbarModule,
    NgbModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatIconModule,
    NgxMaterialTimepickerModule,
    MatDialogModule,
    ColorPickerModule,
    NgSelectModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  exports:[
    HrDashboardPageHeaderComponent,
    TaskDashboardPageHeaderComponent,
    JobDashboardPageHeaderComponent,
    PageHeaderComponent,
    SortableHeader,
    SwitcherComponent
  ]
})
export class SharedModule { }
