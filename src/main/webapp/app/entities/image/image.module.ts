import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TruffleSampleApplicationSharedModule } from 'app/shared';
import {
    ImageComponent,
    ImageDetailComponent,
    ImageUpdateComponent,
    ImageDeletePopupComponent,
    ImageDeleteDialogComponent,
    imageRoute,
    imagePopupRoute
} from './';
import { DisplayImageComponent } from './display-image/display-image.component';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';

const ENTITY_STATES = [...imageRoute, ...imagePopupRoute];

@NgModule({
    imports: [TruffleSampleApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        ImageComponent,
        ImageDetailComponent,
        ImageUpdateComponent,
        ImageDeleteDialogComponent,
        ImageDeletePopupComponent,
        DisplayImageComponent,
        ImageDialogComponent
    ],
    entryComponents: [ImageComponent, ImageUpdateComponent, ImageDeleteDialogComponent, ImageDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TruffleSampleApplicationImageModule {}
