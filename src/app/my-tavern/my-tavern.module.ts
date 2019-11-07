
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { TavernRoutingModule } from './my-tavern-routing.module';
import { TavernsComponent } from './my-tavern.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TavernAddComponent } from './tavernAdd/tavernAdd.component';
import { TavernUpdateComponent } from './tavernUpdate/tavernUpdate.component';
import { roomStayComponent } from './roomStay/roomStay.component';


@NgModule({
    declarations: [TavernsComponent, TavernAddComponent, TavernUpdateComponent, roomStayComponent],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        NgbModule,
        TavernRoutingModule,
    ],
})
export class TavernModule {}
