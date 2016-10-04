import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';
import {FormsModule}   from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {MapComponent} from './app/components/map/map.component';
import {SearcherComponent} from './app/components/searcher/searcher.component';
import {MarkerComponent} from './app/components/marker/marker.component';

import {MapService} from './app/services/map.service';
import {GeocodingService} from './app/services/geocoding.service';

@NgModule({
    imports: [HttpModule, FormsModule, BrowserModule],
    bootstrap: [MapComponent],
    declarations: [
        MapComponent,
        SearcherComponent,
        MarkerComponent
    ],
    providers: [
        MapService,
        GeocodingService
    ]
})

export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
