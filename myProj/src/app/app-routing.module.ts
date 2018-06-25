import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupsComponent } from './groups/groups.component';
import { LitsComponent } from './lits/lits.component';
import { BulletinComponent } from './bulletin/bulletin.component';
import { LitOpenComponent } from './lits/lit-open/lit-open.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/bulletin', pathMatch: 'full'},
  { path: 'groups', component: GroupsComponent },
  { path: 'lits', component: LitsComponent, children:[
    { path: ':litId', component: LitOpenComponent},
    { path: ":litId/:threadId", component: LitOpenComponent }
  ]},
  { path: 'bulletin', component: BulletinComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
