import {h, FunctionalComponent} from "preact"
import cls from "classnames"

import {PointOfInterest} from "./types"

export enum Screen {
  Map, Location
}


type Props = {
  screen: Screen
  onChange: (s: Screen) => void
  location: PointOfInterest | null
}


export const Navbar: FunctionalComponent<Props> =
  ({screen, onChange, location}) =>
{
  const isMap = screen == Screen.Map;

  return (
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a
            class={cls("navbar-item", {"is-active": isMap})}
            onClick={() => onChange(Screen.Map)}
          >
            Карта
          </a>
          { location &&
            <a
              class={cls("navbar-item", {"is-active": !isMap})}
              onClick={() => onChange(Screen.Location)}
            >
              {location.title}
            </a>
          }
        </div>
      </div>
    </nav>
  );
}
