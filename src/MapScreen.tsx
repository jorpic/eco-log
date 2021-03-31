
import {h, FunctionalComponent, Fragment} from "preact"
import cls from "classnames"
import {Map} from "./Map"
import {PointOfInterest} from "./types"


const API_KEY: string = "AIzaSyAKJF-eH52gwxnfauEhA8Pq4bssvxQOjE0";

const locations = [
  {title: "Hello", position: { lat: -34.397, lng: 150.644 }},
  {title: "World", position: { lat: -34.197, lng: 150.944 }},
];


type Props = {
  selectedLocation: PointOfInterest | null
  onSelectLocation: (l: PointOfInterest) => void
}


export const MapScreen: FunctionalComponent<Props> =
  ({selectedLocation, onSelectLocation}) =>
{
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
        <Panel
          locations={locations}
          selectedLocation={selectedLocation}
          onSelectLocation={onSelectLocation}
        />
      </div>
    </div>);
}


type PanelProps = {
  locations: PointOfInterest[]
  selectedLocation: PointOfInterest | null
  onSelectLocation: (l: PointOfInterest) => void
}

// FIXME: center map
const Panel: FunctionalComponent<PanelProps> =
  ({locations, selectedLocation, onSelectLocation}) =>
{
  return (
    <article class="panel is-link">
      <p class="panel-heading">Места</p>
      {locations.map(p =>
        <a
          class={cls("panel-block", {"is-active": p == selectedLocation})}
          onClick={() => onSelectLocation(p)}
        >
          <span class="panel-icon">
            <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
          </span>
          {p.title}
          {p == selectedLocation &&
            <button
              class="button is-primary is-small mx-4"
              onClick={() => console.log("OK")}
            >
              Заполнить
            </button>
          }
        </a>
      )}
    </article>
  );
}

