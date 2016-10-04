import {Component} from '@angular/core';
import {GeocodingService} from '../../services/geocoding.service';
import {MapService} from '../../services/map.service';
import {MapMouseEvent} from 'mapbox-gl';

@Component({
    selector: 'toolbox',
    template: require<any>('./toolbox.component.html'),
    styles: [
        require<any>('./toolbox.component.less'),
    ],
    providers: []
})
export class ToolboxComponent {

    constructor(private mapService: MapService, private geocoder: GeocodingService) {
    }
}
