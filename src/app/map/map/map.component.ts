import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { HomeData } from '../../../assets/map/data/data.type';
import * as Homes from '../../../assets/map/data/home.json';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private map;
  
  private initMap(): void {
    const mapMinZoom = 3;
		const mapMaxZoom = 6;

		const mapExtent = [-5120.00000000, -5120.00000000, 5120.00000000, 5120.00000000];
		const tileExtent = [-5120.00000000, -5120.00000000, 5120.00000000, 5120.00000000];

		const mapMaxResolution = 1.00000000;
		const mapMinResolution = Math.pow(2, mapMaxZoom) * mapMaxResolution;

    let crs = L.CRS.Simple;
			crs.transformation = new L.Transformation(1, -tileExtent[0], -1, tileExtent[3]);
			crs.scale = function(zoom) {
			return Math.pow(2, zoom) / mapMinResolution;
		};
		crs.zoom = function(scale) {
			return Math.log(scale * mapMinResolution) / Math.LN2;
		};
	  
		let layer;

    let map = new L.Map('map', {
      maxZoom: mapMaxZoom,
      minZoom: mapMinZoom,
      crs: crs
    });

    layer = L.tileLayer('assets/map/{z}/{x}/{y}.png', {
      minZoom: mapMinZoom,
      maxZoom: mapMaxZoom,
      noWrap: true,
      tms: false
    }).addTo(map);

    map.fitBounds([
      crs.unproject(L.point(mapExtent[2], mapExtent[3])),
      crs.unproject(L.point(mapExtent[0], mapExtent[1]))
    ]);

    // This is ugly, figure out a better fix later
    JSON.parse(JSON.stringify(Homes)).homes.forEach((home: HomeData) => {
      let marker = new L.circle(
        [(home.y*-1/1.2),(home.x/1.2)], 
        {
        color: '#ff0266',
        opacity: 0.75,
        fillColor: '#ff0266',
        fillOpacity: 0.5,
        radius: 6
      });
      marker.bindTooltip(home.name).openTooltip();
      marker.addTo(map);
    });
  }

}
