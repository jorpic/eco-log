
import "regenerator-runtime/runtime" // FIXME: babelrc?
import {h, Component, createRef} from "preact"
import {Loader} from "@googlemaps/js-api-loader"
import {PointOfInterest} from "./types"



type Props = {
  class: string
  apiKey: string
  locations: PointOfInterest[]
  selectedLocation: PointOfInterest | null
  onSelectLocation: (l: PointOfInterest) => void
}



export class Map extends Component<Props> {
  mapRef = createRef();

  constructor() {
    super();
    this.state = {map: null};
  }

  async componentDidMount() {
    const {apiKey} = this.props;
    const loader = new Loader({apiKey, version: "weekly"});
    await loader.load();
    const map = new google.maps.Map(
      this.mapRef.current,
      { center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
        mapTypeId: "satellite"

      });
    this.setState({map});
    this.setMarkers(map);
  }

  setMarkers(map: google.maps.Map) {
    const {locations, selectedLocation, onSelectLocation} = this.props;
    const placesWithMarkers = locations.map((p: PointOfInterest) => {
      const {position, title} = p;
      const m = new google.maps.Marker(
        { map, title,
          position: new google.maps.LatLng(position.lat, position.lng),
          animation: p == selectedLocation
            ? google.maps.Animation.BOUNCE
            : null
        });

      m.addListener("click", () => {
        onSelectLocation(p);
        placesWithMarkers.forEach(({marker, place}) =>
          marker.setAnimation(place == p
            ? google.maps.Animation.BOUNCE
            : null)
        )
      });

      return {place: p, marker: m};
    });
  }

  render() {
    return <div class={this.props.class} ref={this.mapRef}></div>;
  }
}
