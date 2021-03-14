
import "regenerator-runtime/runtime" // FIXME: babelrc?
import {h, Component, createRef} from "preact"
import { Loader } from "@googlemaps/js-api-loader"


type Props = {
  apiKey: string
}

export class Map extends Component<Props> {
  mapRef = createRef();

  constructor() {
    super();
    this.state = {map: null};
  }

  async componentDidMount() {
    const {apiKey} = this.props;
    const loader = new Loader({apiKey, version: "weekly"});
    await loader.load();
    const map = new google.maps.Map(
      this.mapRef.current,
      { center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    this.setState({map});
  }

  render() {
    const style = {
      height: "100%"
    };

    return <div style={style} ref={this.mapRef}></div>;
  }
}
