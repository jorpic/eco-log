
import {h, FunctionalComponent, Fragment} from "preact"
import cls from "classnames"

import {PointOfInterest} from "./types"
import {Map} from "./Map"
import {ListOfLocations} from "./ListOfLocations"


const API_KEY: string = "AIzaSyAKJF-eH52gwxnfauEhA8Pq4bssvxQOjE0";

const locations = [
  {title: "Hello", position: { lat: -34.397, lng: 150.644 }},
  {title: "World", position: { lat: -34.197, lng: 150.944 }},
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
  return (
    <div class="columns is-fullheight">
      <Map
        class="column is-two-thirds"
        apiKey={API_KEY}
        locations={locations}
        selectedLocation={selectedLocation}
        onSelectLocation={onSelectLocation}
      />
      <div class="column">
        <ListOfLocations
          locations={locations}
          selectedLocation={selectedLocation}
          onSelectLocation={onSelectLocation}
          onGoToLocationScreen={onGoToLocationScreen}
        />
      </div>
    </div>);
}
