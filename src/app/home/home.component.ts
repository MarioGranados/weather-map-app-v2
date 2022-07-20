import {Component, OnInit} from '@angular/core';
import {environment} from "../../environments/environment.prod";
// @ts-ignore
import * as mapboxgl from 'mapbox-gl';
// @ts-ignore
import * as events from "events";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {

  }

  map: mapboxgl.Map;

  ngOnInit(): void {
    mapboxgl.accessToken = environment.MAPBOX_API;
    const WEATHER_KEY = environment.WEATHER_API;

    this.map = new mapboxgl.Map({
      container: 'map', // container ID
      center: [-122.420679, 37.772537], // starting position [lng, lat]
      zoom: 13, // starting zoom
      style: 'mapbox://styles/mapbox/streets-v11', // style URL or style object
      hash: true, // sync `center`, `zoom`, `pitch`, and `bearing` with URL

    });


    const nav = new mapboxgl.NavigationControl({
      visualizePitch: true
    });
    this.map.addControl(nav, 'bottom-right');

    var coordinates = ([-98.4916, 29.4252]);


// Set an event listener
    this.map.on('click', (e:events) => {
      console.log(`A click event has occurred at ${e.lngLat}`);
    });

// Create a new marker.
// Set marker options.
    const marker = new mapboxgl.Marker({
      color: "#FFFFFF",
      draggable: true
    }).setLngLat(coordinates)
      .addTo(this.map);
  }

}
