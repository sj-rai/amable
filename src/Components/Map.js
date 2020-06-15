import React from 'react'
import mapboxgl from 'mapbox-gl';
// import MapboxDirections from '@mapbox/mapbox-gl-directions'
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
// import 'mapbox-gl/dist/mapbox-gl.css' // Updating node module will keep css up to date.
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css' // Updating node module will keep css up to date.

mapboxgl.accessToken = 'pk.eyJ1Ijoicy1hLW4tIiwiYSI6ImNrOW1nYjczdDAwNDYzZnExNnQ5dm82czEifQ.esEYb5WXIpU-YAXEoA3usw';


export default class MapComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            lng: 75,
            lat: 12.9,
            zoom: 6.5,
            geoData: {},
            userLocation:""
        };
        // this.success = this.success.bind(this)

    }

    componentDidMount() {

        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/s-a-n-/ck9mgl30r3ieg1irzkqrizs96',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });
        let url = window.location.href;
        let QueryParamExists = (url.indexOf('?lng=') != -1)||(url.indexOf('&lat=') != -1)?true: false

        
        if(QueryParamExists) {
            let urlQuery = url.split('?')[1]
            // console.log("[]"+urlQuery)
            let params = new URLSearchParams(urlQuery)
            
            // console.log("[lng]"+params)
            var marker = new mapboxgl.Marker()
                .setLngLat([params.get(`lng`), params.get(`lat`)])
                .addTo(map);

            map.addControl(
                new MapboxDirections({
                accessToken: mapboxgl.accessToken
                })
                .setDestination([params.get(`lng`), params.get(`lat`)]),
                // .setOrigin(this.state.userLocation?this.state.userLocation:[]),
                'bottom-right'
            );
        }

        map.on('move', () => {
            this.setState({
            lng: map.getCenter().lng.toFixed(4),
            lat: map.getCenter().lat.toFixed(4),
            zoom: map.getZoom().toFixed(2)
            });
        });
        map.addControl(
            new mapboxgl.GeolocateControl({
                positionOptions: {
                    // enableHighAccuracy: true
                },
                trackUserLocation: true,
                showUserLocation: true,
                fitBoundsOptions: { maxZoom:15, linear: true }
            }), 'bottom-right'
        );

        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
          };

        // navigator.geolocation.getCurrentPosition(success, error, options);

        // function success(pos) {
        //     var crd = pos.coords;
          
        //     console.log('Your current position is:');
        //     console.log(`Latitude : ${crd.latitude}`);
        //     console.log(`Longitude: ${crd.longitude}`);
        //     console.log(`More or less ${crd.accuracy} meters.`);
        //     this.setState({userLocation:[crd.latitude, crd.longitude]})
        //   }

        //   function error(err) {
        //     console.warn(`ERROR(${err.code}): ${err.message}`);
        //   }
        // map.addControl(
        //     new MapboxDirections({
        //     accessToken: mapboxgl.accessToken
        //     }).setDestination([80,12]),
        //     'bottom-right'
        // );

       
    }
    componentDidUpdate() {
        
    }

    render() {
        return (
          <div>
            <div className='sidebarStyle'>
                <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
            </div>
            <div className="map">
                <div ref={el => this.mapContainer = el} className='mapContainer' />
            </div>
          </div>
        )
    }
}