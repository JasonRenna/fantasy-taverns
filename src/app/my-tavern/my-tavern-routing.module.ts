import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from '../common/auth/auth.guard';
import { TavernsComponent } from './my-tavern.component';
import { TavernAddComponent } from './tavernAdd/tavernAdd.component';
import { TavernUpdateComponent } from './tavernUpdate/tavernUpdate.component';
import { roomStayComponent } from './roomStay/roomStay.component';

const routes: Routes = [
    { path: 'my-tavern', component: TavernsComponent, canActivate: [AuthGuard] },
    { path: 'my-tavern/add', component: TavernAddComponent, canActivate: [AuthGuard],},
    { path: 'my-tavern/update', component: TavernUpdateComponent, canActivate: [AuthGuard],},
    { path: 'my-tavern/roomstay', component: roomStayComponent, canActivate: [AuthGuard],},
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)],
})
export class TavernRoutingModule {}
