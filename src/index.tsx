import "@fortawesome/fontawesome-free/css/all.css"
import "./index.sass"

import {h, Fragment, render} from "preact"
import {useState} from "preact/hooks"
import cls from "classnames"

import {Navbar, Screen} from "./Navbar"
import {MapScreen} from "./MapScreen"
import {LocationScreen} from "./LocationScreen"


function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.Map);
  const [currentLocation, setCurrentLocation] = useState(null);

  return (
    <Fragment>
      <Navbar
        screen={currentScreen}
        onChange={setCurrentScreen}
        location={currentLocation}
      />
      { currentScreen == Screen.Map
        ? <MapScreen
          selectedLocation={currentLocation}
          onSelectLocation={setCurrentLocation}
          onGoToLocationScreen={() => setCurrentScreen(Screen.Location)}
          />
        : <LocationScreen
          selectedLocation={currentLocation}
          />
      }
    </Fragment>
  );
}

render(<App />, document.body);
