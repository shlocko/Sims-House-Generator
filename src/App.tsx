import { createSignal, For, Show, type Component } from 'solid-js';

import styles from './App.module.css';
import ConfigHouse from './components/configForm';
import ShowHouse from './components/showHouse';
import { house, roomName, roomNames, View } from './scripts/types';
import { makePersisted } from '@solid-primitives/storage';
import { createStore } from 'solid-js/store';
import { simulateHouseGen } from './scripts/houseGenSimulator';
import ConfigGeneration from './components/configGeneration';
import { initMissingRoomConfigs, resetConfigToDefault } from './scripts/roomConfig';
import { Simulator } from './components/simulator';

export const [houseObject, setHouseObject] = makePersisted(createStore<house>({ rooms: [] }), { name: "persistedHouse" })

const initialShowRoomConfig: Record<roomName, boolean> = Object.fromEntries(
  roomNames.map(name => [name, false])
) as Record<roomName, boolean>;

export const [showRoomConfig, setShowRoomConfig] = createStore(initialShowRoomConfig);

export const App: Component = () => {
  initMissingRoomConfigs()
  const [view, setView] = createSignal<View>("generator")

  //simulateHouseGen(1000, 15)
  return (
    <div class={styles.App}>
      <div>
        <button onClick={() => setView("config")}> Config </button>
        <button onClick={() => setView("generator")}> Generate House </button>
        <button onClick={() => setView("simulator")}> Simulator </button>
      </div>
      <Show when={view() === "generator"}>
        <ConfigHouse />
        <br />
        <ShowHouse house={houseObject} />
      </Show>
      <Show when={view() === "config"}>
        <button onClick={() => resetConfigToDefault()}> Reset Config to Default </button><br /><br /><br />
        <For each={roomNames}>
          {(rn) => <div>
            <button onClick={() => {
              setShowRoomConfig(rn, v => !v); // toggle
            }}>
              {rn}
            </button>
            <Show when={showRoomConfig[rn]}>
              <ConfigGeneration name={rn} />
            </Show>
          </div>}
        </For>
      </Show>
      <Show when={view() === "simulator"}>
        <Simulator />
      </Show>
    </div >
  );
};

export default App
