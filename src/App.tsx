import { createSignal, For, Show, type Component } from 'solid-js';

import styles from './App.module.css';
import ConfigHouse from './components/configForm';
import ShowHouse from './components/showHouse';
import { house, roomName, roomNames } from './scripts/types';
import { makePersisted } from '@solid-primitives/storage';
import { createStore } from 'solid-js/store';
import { simulateHouseGen } from './scripts/houseGenSimulator';
import ConfigGeneration from './components/configGeneration';
import { initMissingRoomConfigs } from './scripts/roomConfig';

export const [houseObject, setHouseObject] = makePersisted(createStore<house>({ rooms: [] }), { name: "persistedHouse" })

const initialShowRoomConfig: Record<roomName, boolean> = Object.fromEntries(
  roomNames.map(name => [name, false])
) as Record<roomName, boolean>;

export const [showRoomConfig, setShowRoomConfig] = createStore(initialShowRoomConfig);

export const App: Component = () => {
  initMissingRoomConfigs()
  const [showConfig, setShowConfig] = createSignal(false)

  simulateHouseGen(10000, 15)
  return (
    <div class={styles.App}>
      <div>
        <button onClick={() => setShowConfig(true)}> Config </button>
        <button onClick={() => setShowConfig(false)}> Generate House </button>
      </div>
      <Show when={!showConfig()}>
        <ConfigHouse />
        <br />
        <ShowHouse house={houseObject} />
      </Show>
      <Show when={showConfig()}>
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
    </div >
  );
};

export default App
