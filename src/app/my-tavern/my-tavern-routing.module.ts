import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from '../common/auth/auth.guard';
import { TavernsComponent } from './my-tavern.component';

const routes: Routes = [
    { path: 'my-tavern', component: TavernsComponent, canActivate: [AuthGuard] }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)],
})
export class TavernRoutingModule {}
