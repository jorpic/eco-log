import "bulma/css/bulma.css"
import "@fortawesome/fontawesome-free/css/all.css"

import {h, render} from "preact"
import {Map} from "./Map"


const API_KEY: string = "";

render(
  <Map apiKey={API_KEY} />,
  document.body);
