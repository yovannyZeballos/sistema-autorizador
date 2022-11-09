import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { error } from './shared/routes/error.routes';
import { content } from './shared/routes/content.routes';

import { ContentComponent } from './shared/layout-components/layout/content/content.component';
import { ErrorComponent } from './shared/layout-components/layout/error/error.component';
import { account } from './shared/routes/account';
import { AccountComponent } from './shared/layout-components/layout/account/account.component';
import { support } from './shared/routes/supportSystem';
import { SupportSystemComponent } from './shared/layout-components/layout/support-system/support-system.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module')
      .then(m => m.AuthModule),
  },
  {
    path: '',
    component: ContentComponent,
    // canActivate: [AdminGuard],
    children: content,
  },
  {
    path: '',
    component: ErrorComponent,
    // canActivate: [AdminGuard],
    children: error,
  },
  {
    path: '',
    component: AccountComponent,
    // canActivate: [AdminGuard],
    children: account,
  },
  {
    path: '',
    component: SupportSystemComponent,
    // canActivate: [AdminGuard],
    children: support,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    [
      RouterModule.forRoot(routes, {
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
        relativeLinkResolution: 'legacy',
      }),
    ],
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
