
import {h, FunctionalComponent} from "preact"
import {PointOfInterest} from "./types"

type Props = {
  selectedLocation: PointOfInterest | null
}

export const LocationScreen: FunctionalComponent<Props> =
  ({selectedLocation}) =>
{
  return (
    <div class="columns is-fullheight">
      <div class="column is-one-quarter">
        Hello
      </div>
      <div class="column">
        World
      </div>
    </div>);
}
