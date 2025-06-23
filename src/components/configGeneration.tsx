import { Component, createSignal, For } from "solid-js";
import { roomConfiguration } from "../scripts/roomConfig";

const ConfigGeneration: Component = () => {
  const [num, setNum] = createSignal('');

  const handleSubmit = (e: Event) => {
    e.preventDefault();

  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        How many rooms:
        <input type="text" value={num()} onInput={(e) => setNum(e.currentTarget.value)} />
      </label>

      <For each={[...roomConfiguration.entries()]}>
        {(roomConf) => <div>
        </div>}
      </For>
      <button type="submit">Save</button>
    </form>
  );
}

export default ConfigGeneration;
