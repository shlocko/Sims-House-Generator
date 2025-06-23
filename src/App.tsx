import { createSignal, Show, type Component } from 'solid-js';

import styles from './App.module.css';
import ConfigHouse from './components/configForm';
import ShowHouse from './components/showHouse';
import { house } from './scripts/types';
import { makePersisted } from '@solid-primitives/storage';
import { createStore } from 'solid-js/store';
import { simulateHouseGen } from './scripts/houseGenSimulator';

export const [houseObject, setHouseObject] = makePersisted(createStore<house>({ rooms: [] }), { name: "persistedHouse" })

export const App: Component = () => {
  simulateHouseGen(10000, 15)
  return (
    <div class={styles.App}>
      <ConfigHouse />
      <br />
      <ShowHouse house={houseObject} />
    </div >
  );
};

export default App
