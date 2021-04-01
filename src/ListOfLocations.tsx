import {h, FunctionalComponent} from "preact"
import cls from "classnames"

import {PointOfInterest} from "./types"

type Props = {
  locations: PointOfInterest[]
  selectedLocation: PointOfInterest | null
  onSelectLocation: (l: PointOfInterest) => void
  onGoToLocationScreen: () => void
}

// FIXME: center map
export const ListOfLocations: FunctionalComponent<Props> = (props) =>
{
  const {locations, selectedLocation} = props;
  const {onSelectLocation, onGoToLocationScreen} = props;

  return (
    <article class="panel is-link">
      <p class="panel-heading">Места</p>
        <div class="panel-block">
          <div class="container has-text-centered">
            <button
              class="button is-primary"
              disabled={!selectedLocation}
              onClick={onGoToLocationScreen}
            >
              Перейти к заполнению данных
            </button>
          </div>
        </div>

      {locations.map(p =>
        <a
          class={cls("panel-block", {"is-active": p == selectedLocation})}
          onClick={() => onSelectLocation(p)}
        >
          <span class="panel-icon">
            <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
          </span>
          {p.title}
        </a>
      )}
    </article>
  );
}

