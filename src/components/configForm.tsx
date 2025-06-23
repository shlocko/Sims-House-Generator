import { Component, createSignal } from 'solid-js';
import { houseObject, setHouseObject } from '../App';
import { generateHouse } from '../scripts/generateHouse';
import { setTotalBudget, totalBudget } from './showHouse';
import { roomNames } from '../scripts/types';
import { roomConfiguration } from '../scripts/roomConfig';

const ConfigHouse: Component = () => {
  const [num, setNum] = createSignal('');
  const [maxSize, setMaxSize] = createSignal('');

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    let minRooms = 0

    roomNames.forEach((rn) => {
      minRooms += roomConfiguration.get(rn)!.minCount
    })
    let count: number = Number(num())
    let maxDim: number = Number(maxSize())
    if (!count || !maxDim) {
      alert("Not a valid number.")
    } else if (count < minRooms) {
      alert("Too few rooms.")
    } else if (maxDim < 6) {
      alert("Too small maximum dimension.")
    } else {
      let generatedHouse = generateHouse(count, maxDim)
      let size = 0;
      generatedHouse.rooms.forEach((room) => {
        size += room.yDim * room.xDim
      })
      if (size > 40000) {
        alert("House generated too big, consider selecting less rooms and try again!")
        return
      }
      setHouseObject(generatedHouse)
      setTotalBudget(0)
      houseObject.rooms.forEach((room) => setTotalBudget(totalBudget() + room.budget))
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        How many rooms:
        <input type="text" value={num()} onInput={(e) => setNum(e.currentTarget.value)} />
      </label><br />
      <label>
        Maximum room dimension:
        <input type="text" value={maxSize()} onInput={(e) => setMaxSize(e.currentTarget.value)} />
      </label>
      <button type="submit">Submit</button>
    </form >
  );
}

export default ConfigHouse;
