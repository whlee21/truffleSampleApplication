/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { TruffleSampleApplicationTestModule } from '../../../test.module';
import { ImageComponent } from 'app/entities/image/image.component';
import { ImageService } from 'app/entities/image/image.service';
import { Image } from 'app/shared/model/image.model';

describe('Component Tests', () => {
    describe('Image Management Component', () => {
        let comp: ImageComponent;
        let fixture: ComponentFixture<ImageComponent>;
        let service: ImageService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [TruffleSampleApplicationTestModule],
                declarations: [ImageComponent],
                providers: []
            })
                .overrideTemplate(ImageComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(ImageComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ImageService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new Image(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.images[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
