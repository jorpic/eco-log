import "bulma/css/bulma.css"
import "@fortawesome/fontawesome-free/css/all.css";

import { h, render } from "preact";

const App = ({icon}) =>
  <h1>
    <span class="icon is-small is-right">
      <i class={`fas ${icon}`}></i>
    </span>
 </h1>;

render(<App icon="fa-spinner fa-pulse"/>, document.body);
