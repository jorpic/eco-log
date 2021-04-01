import {h, FunctionalComponent} from "preact"
import cls from "classnames"
import "./ProbeForm.sass"
import {Probe} from "./types"

type Props = {
  probe: Probe
}
export const ProbeForm: FunctionalComponent<Props> = (props) => {
  const {probe} = props;
  const radio = (label: string) =>
    <label class="radio">
      <input type="radio" name="answer"/>
      {label}
    </label>;

  return (
    <div class="field">
      <p>{probe.description}</p>
      <div class="control radio-list">
        {probe.bullets.map(radio)}
      </div>
    </div>
  );
};
