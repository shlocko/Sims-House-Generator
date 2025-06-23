import { Component, createSignal, For } from "solid-js";
import { roomConfiguration, setRoomConfiguration } from "../scripts/roomConfig";
import { roomName } from "../scripts/types";
import { createStore } from "solid-js/store";

export type configProps = {
  name: roomName
}

const ConfigGeneration: Component<configProps> = (props) => {
  const [minDim, setMinDim] = createSignal<string>(String(roomConfiguration[props.name].minDim));
  const [maxDim, setMaxDim] = createSignal<string>(String(roomConfiguration[props.name].maxDim));
  const [minCount, setMinCount] = createSignal<string>(String(roomConfiguration[props.name].minCount));
  const [maxCount, setMaxCount] = createSignal<string>(String(roomConfiguration[props.name].maxCount));
  const [minBudget, setMinBudget] = createSignal<string>(String(roomConfiguration[props.name].minBudget));
  const [maxBudget, setMaxBudget] = createSignal<string>(String(roomConfiguration[props.name].maxBudget));
  const [frequencyConstant, setFrequencyConstant] = createSignal<string>(String(roomConfiguration[props.name].frequencyConstant));

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    if (isNaN(Number(minDim()))) {
      alert("Invalid number for min dimension.");
    } else if (isNaN(Number(maxDim()))) {
      alert("Invalid number for max dimension.");
    } else if (isNaN(Number(minCount()))) {
      alert("Invalid number for min count.");
    } else if (isNaN(Number(maxCount()))) {
      alert("Invalid number for max count.");
    } else if (isNaN(Number(minBudget()))) {
      alert("Invalid number for min budget.");
    } else if (isNaN(Number(maxBudget()))) {
      alert("Invalid number for max budget.");
    } else if (isNaN(Number(frequencyConstant()))) {
      alert("Invalid number for frequency constant.");
    } else {
      setRoomConfiguration(props.name, {
        minDim: Number(minDim()),
        maxDim: Number(maxDim()),
        minCount: Number(minCount()),
        maxCount: Number(maxCount()),
        minBudget: Number(minBudget()),
        maxBudget: Number(maxBudget()),
        frequencyConstant: Number(frequencyConstant()),
      })
    }

  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Min Dimension:
        <input type="text" value={minDim()} onInput={(e) => setMinDim(e.currentTarget.value)} />
      </label><br />

      <label>
        Max Dimension:
        <input type="text" value={maxDim()} onInput={(e) => setMaxDim(e.currentTarget.value)} />
      </label><br />

      <label>
        Min Count:
        <input type="text" value={minCount()} onInput={(e) => setMinCount(e.currentTarget.value)} />
      </label><br />

      <label>
        Max Count:
        <input type="text" value={maxCount()} onInput={(e) => setMaxCount(e.currentTarget.value)} />
      </label><br />

      <label>
        Min Budget:
        <input type="text" value={minBudget()} onInput={(e) => setMinBudget(e.currentTarget.value)} />
      </label><br />

      <label>
        Max Budget:
        <input type="text" value={maxBudget()} onInput={(e) => setMaxBudget(e.currentTarget.value)} />
      </label><br />
      <label>
        Frequency Constant:
        <input type="text" value={frequencyConstant()} onInput={(e) => setFrequencyConstant} />
      </label><br />

      <button type="submit">Save</button>
    </form>
  );
}

export default ConfigGeneration;
