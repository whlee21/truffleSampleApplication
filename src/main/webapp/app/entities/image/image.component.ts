import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IImage } from 'app/shared/model/image.model';
import { Principal } from 'app/core';
import { ImageService } from './image.service';

@Component({
    selector: 'jhi-image',
    templateUrl: './image.component.html'
})
export class ImageComponent implements OnInit, OnDestroy {
    images: IImage[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private imageService: ImageService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {}

    loadAll() {
        this.imageService.query().subscribe(
            (res: HttpResponse<IImage[]>) => {
                this.images = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    ngOnInit() {
        this.loadAll();
        this.principal.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInImages();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IImage) {
        return item.id;
    }

    registerChangeInImages() {
        this.eventSubscriber = this.eventManager.subscribe('imageListModification', response => this.loadAll());
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
