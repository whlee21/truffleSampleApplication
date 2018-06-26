import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TruffleSampleApplicationImageModule } from './image/image.module';
import { TruffleSampleApplicationPendingTransactionModule } from './pending-transaction/pending-transaction.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        TruffleSampleApplicationImageModule,
        TruffleSampleApplicationPendingTransactionModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TruffleSampleApplicationEntityModule {}
