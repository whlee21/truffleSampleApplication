import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TruffleSampleApplicationSharedModule } from 'app/shared';
import {
    PendingTransactionComponent,
    PendingTransactionDetailComponent,
    PendingTransactionUpdateComponent,
    PendingTransactionDeletePopupComponent,
    PendingTransactionDeleteDialogComponent,
    pendingTransactionRoute,
    pendingTransactionPopupRoute
} from './';

const ENTITY_STATES = [...pendingTransactionRoute, ...pendingTransactionPopupRoute];

@NgModule({
    imports: [TruffleSampleApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        PendingTransactionComponent,
        PendingTransactionDetailComponent,
        PendingTransactionUpdateComponent,
        PendingTransactionDeleteDialogComponent,
        PendingTransactionDeletePopupComponent
    ],
    entryComponents: [
        PendingTransactionComponent,
        PendingTransactionUpdateComponent,
        PendingTransactionDeleteDialogComponent,
        PendingTransactionDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TruffleSampleApplicationPendingTransactionModule {}
