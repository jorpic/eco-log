
import "regenerator-runtime/runtime" // FIXME: babelrc?
import {h, FunctionalComponent, createRef} from "preact"
import {useState, useEffect} from "preact/hooks"
import {Loader} from "@googlemaps/js-api-loader"
import {PointOfInterest} from "./types"



type Props = {
  class: string
  apiKey: string
  center: {lat: number, lng: number}
  zoom: number
  locations: PointOfInterest[]
  selectedLocation: PointOfInterest | null
  onSelectLocation: (l: PointOfInterest) => void
}



export const Map: FunctionalComponent<Props> = (props) => {
  const {locations, selectedLocation, onSelectLocation} = props;
  const mapRef = createRef();
  const [map, setMap] = useState<google.maps.Map | null>(null);

  async function componentDidMount() {
    const {apiKey, center, zoom} = props;
    const loader = new Loader({apiKey, version: "weekly"});
    await loader.load();

    setMap(new google.maps.Map(
      mapRef.current,
      {center, zoom, mapTypeId: "satellite"}
    ));
  }

  useEffect(() => {componentDidMount()}, []);

  const [markers, setMarkers] = useState([]);

  function createMarkers() {
    if (!map) return;
    const placesWithMarkers = locations.map((p: PointOfInterest) => {
      const {position, title} = p;
      const m = new google.maps.Marker(
        { map, title,
          position: new google.maps.LatLng(position.lat, position.lng),
          animation: p == selectedLocation
            ? google.maps.Animation.BOUNCE
            : null
        });

      m.addListener("click", () => {onSelectLocation(p)});
      return {place: p, marker: m};
    });
    setMarkers(placesWithMarkers);
  }

  useEffect(createMarkers, [map]);

  function toggleBounce() {
    markers.forEach(({marker, place}) =>
      marker.setAnimation(place == selectedLocation
        ? google.maps.Animation.BOUNCE
        : null)
    )
  }

  useEffect(toggleBounce, [selectedLocation]);

  const {zoom, center} = props;
  useEffect(() => map && map.setZoom(zoom), [zoom]);
  useEffect(() => map && map.panTo(center), [center]);

  return <div class={props.class} ref={mapRef}></div>;
}
