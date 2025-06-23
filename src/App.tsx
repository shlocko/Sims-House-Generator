import { createSignal, Show, type Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import ConfigHouse from './components/configForm';
import ShowHouse from './components/showHouse';
import { house } from './scripts/types';
import { makePersisted } from '@solid-primitives/storage';
import { createStore } from 'solid-js/store';

export const [houseObject, setHouseObject] = makePersisted(createStore<house>({ rooms: [] }), { name: "persistedHouse" })

export const App: Component = () => {
  return (
    <div class={styles.App}>
      <ConfigHouse />
      <br />
      <ShowHouse house={houseObject} />
    </div >
  );
};

export default App
