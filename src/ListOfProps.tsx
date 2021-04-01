import {h, FunctionalComponent} from "preact"
import cls from "classnames"

import {Probe} from "./types"


type Props = {
  probes: Probe[],
  currentProbe: Probe,
  onSetCurrentProbe: (p: Probe) => void
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
            <i class={`fas fa-${p.icon}`} aria-hidden="true"></i>
          </span>
          {p.title}
        </a>
      )}
    </article>);

}
