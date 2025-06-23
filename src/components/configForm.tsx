import { Component, createSignal } from 'solid-js';
import { setHouseObject } from '../App';
import { generateHouse } from '../scripts/generateHouse';

const ConfigHouse: Component = () => {
  const [num, setNum] = createSignal('');

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    let count: number = Number(num())
    if (!count) {
      alert("Not a valid number.")
    } else if (count < 4) {
      alert("Too few rooms.")
    } else {
      let generatedHouse = generateHouse(count)
      let size = 0;
      generatedHouse.rooms.forEach((room) => {
        size += room.yDim * room.xDim
      })
      if (size > 40000) {
        alert("House generated too big, consider selecting less rooms and try again!")
        return
      }
      setHouseObject(generatedHouse)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        How many rooms:
        <input type="text" value={num()} onInput={(e) => setNum(e.currentTarget.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ConfigHouse;
