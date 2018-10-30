import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import { USSDLogsPage } from './ussd_logs.page';

describe('AboutPage', () => {
    let component: USSDLogsPage;
    let fixture: ComponentFixture<USSDLogsPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [USSDLogsPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(USSDLogsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
