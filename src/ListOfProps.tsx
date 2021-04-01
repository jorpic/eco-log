import {h, FunctionalComponent} from "preact"
import cls from "classnames"

import {PointOfInterest} from "./types"

type Props = {
  probes: string[]
  currentProbe: string
  onSetCurrentProbe: (p: string) => void
}


export const ListOfProps: FunctionalComponent<Props> = (props) => {
  const {probes, currentProbe, onSetCurrentProbe} = props;
  return (
    <article class="panel is-link">
      <p class="panel-heading">Пробы</p>
      {probes.map(p =>
        <a
          class={cls("panel-block", {"is-active": p == currentProbe})}
          onClick={() => onSetCurrentProbe(p)}
        >
          <span class="panel-icon">
            <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
          </span>
          {p.title}
        </a>
      )}
    </article>);

}
