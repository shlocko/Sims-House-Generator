import { createSignal, Show, type Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import ConfigHouse from './components/configForm';
import ShowHouse from './components/showHouse';
import { house } from './scripts/types';

export const [houseObject, setHouseObject] = createSignal<house | null>(null)

export const App: Component = () => {
  return (
    <div class={styles.App}>
      <ConfigHouse />
      <br />
      <Show when={houseObject()}>
        <ShowHouse house={houseObject()!} />
      </Show>
    </div >
  );
};

export default App
