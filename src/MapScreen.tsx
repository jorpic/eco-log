
import {h, FunctionalComponent, Fragment} from "preact"
import {useState} from "preact/hooks"
import cls from "classnames"

import {PointOfInterest} from "./types"
import {Map} from "./Map"
import {ListOfLocations} from "./ListOfLocations"


const API_KEY: string = "AIzaSyAKJF-eH52gwxnfauEhA8Pq4bssvxQOjE0";

const locations = [
  {title: "Занулье", position: {lat: 60.6478032, lng: 49.3974168}},
  {title: "Кыддзявидзь", position: {lat: 60.4957881, lng: 49.5789993}},
  {title: "Лойма", position: {lat: 60.5499993, lng: 48.8078908}},
  {title: "Ношуль", position: {lat: 60.1506113, lng: 49.4837509}},
  {title: "Зимовка", position: {lat: 60.5633273, lng: 50.5677878}},
];



type Props = {
  selectedLocation: PointOfInterest | null
  onSelectLocation: (l: PointOfInterest) => void
  onGoToLocationScreen: () => void
}


export const MapScreen: FunctionalComponent<Props> = (props) =>
{
  const {selectedLocation} = props;
  const {onSelectLocation, onGoToLocationScreen} = props;

  const [center, setCenter] = useState({lat: 60.7400703, lng: 49.5576848});
  const [zoom, setZoom] = useState(8);

  const zoomToNewLocation = (l: PointOfInterest) => {
    setZoom(10);
    setCenter(l.position);
    onSelectLocation(l);
  }

  return (
    <div class="columns is-fullheight">
      <Map
        class="column is-two-thirds"
        apiKey={API_KEY}
        center={center}
        zoom={zoom}
        locations={locations}
        selectedLocation={selectedLocation}
        onSelectLocation={onSelectLocation}
      />
      <div class="column">
        <ListOfLocations
          locations={locations}
          selectedLocation={selectedLocation}
          onSelectLocation={zoomToNewLocation}
          onGoToLocationScreen={onGoToLocationScreen}
        />
      </div>
    </div>);
}
