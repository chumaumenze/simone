import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DialerPage} from './dialer.page';

describe('DialerPage', () => {
    let component: DialerPage;
    let fixture: ComponentFixture<DialerPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DialerPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DialerPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
