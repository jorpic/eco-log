import "@fortawesome/fontawesome-free/css/all.css"
import "./index.sass"

import {h, Fragment, render} from "preact"
import {useState} from "preact/hooks"
import cls from "classnames"
import {Map} from "./Map"
import {CollectionState, useCollectionState} from "./CollectionState"


const API_KEY: string = "AIzaSyAKJF-eH52gwxnfauEhA8Pq4bssvxQOjE0";

function Navbar() {
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
          <a class="navbar-item"> Home </a>
          <a class="navbar-item"> Documentation </a>
        </div>
      </div>
    </nav>
  );
}


// FIXME: select & center map
function Panel({places}) {
  return (
    <article class="panel is-link">
      <p class="panel-heading">Места</p>
      {places.elements.map(p =>
        <a class={cls("panel-block", {"is-active": p == places.selected})}>
          <span class="panel-icon">
            <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
          </span>
          {p.title}
        </a>
      )}
    </article>
  );
}

const locations = [
  {title: "Hello", position: { lat: -34.397, lng: 150.644 }},
  {title: "World", position: { lat: -34.197, lng: 150.944 }},
];

function App() {
  const places = useCollectionState(locations, null);
  return (
    <Fragment>
      <Navbar />
      <div class="columns is-fullheight">
        <Map
          class="column is-two-thirds"
          apiKey={API_KEY}
          places={places}
        />
        <div class="column">
          <Panel places={places}
          />
        </div>
      </div>
    </Fragment>
  );
}

render(<App />, document.body);
