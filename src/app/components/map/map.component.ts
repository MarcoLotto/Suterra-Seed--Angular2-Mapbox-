import {Component, ViewChild} from '@angular/core';
import {SearcherComponent} from '../searcher/searcher.component';
import {MarkerComponent} from '../marker/marker.component';
import {MapService} from '../../services/map.service';
import {GeocodingService} from '../../services/geocoding.service';
import {Location} from '../../core/location.class';
import {LngLat, Map} from 'mapbox-gl';

@Component({
    selector: 'app',
    template: require<any>('./map.component.html'),
    styles: [
        require<any>('./map.component.less')
    ],
    providers: []
})
export class MapComponent {
    @ViewChild(MarkerComponent) markerComponent: MarkerComponent;

    map: Map;
    constructor(private mapService: MapService, private geocoder: GeocodingService) {

    }

    ngOnInit() {
      this.checkCurrentLocation();
    }

    ngAfterViewInit() {
        this.markerComponent.Initialize();
    }

    initializeMap(latitude: number, longitude: number){
      this.map = new Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/satellite-streets-v10',
          zoom: 13,
          center: [longitude, latitude]
      });
      this.mapService.map = this.map;
    }

    checkCurrentLocation(){
      if (navigator.geolocation) {
        var self = this;
        navigator.geolocation.getCurrentPosition(
          function(position) {
            let latitude = position.coords["latitude"];
            let longitude = position.coords["longitude"];
            self.initializeMap(latitude, longitude);
          },
          function(error) {
           self.initializeMap(51.47879, 0);
          });
      }
      else{
        this.initializeMap(0, 0);
      }
    }
}
