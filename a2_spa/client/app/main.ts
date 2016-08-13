///<reference path="../../typings/index.d.ts"/>

import {provide} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {Http, XHRBackend, HTTP_PROVIDERS, RequestOptions} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import 'rxjs/add/operator/map';
import {MODAL_BROWSER_PROVIDERS} from 'angular2-modal/platform-browser';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

import {AppComponent} from './appComponent';

bootstrap(AppComponent, [
    disableDeprecatedForms(),
    provideForms(),
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    MODAL_BROWSER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy })
]);