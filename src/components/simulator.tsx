import { Component, createSignal, For, Show } from "solid-js"
import { simulateHouseGen } from "../scripts/houseGenSimulator"
import { roomName } from "../scripts/types"

export const Simulator: Component = () => {
  const [rooms, setRooms] = createSignal('15')
  const [iters, setIters] = createSignal('1000')
  const [results, setResults] = createSignal<Map<roomName, number>>()

  const handleSubmit = (e: Event) => {
    e.preventDefault()
    if (!Number(rooms()) || !Number(iters())) {
      alert("Invalid number");
    } else {
      setResults(simulateHouseGen(Number(iters()), Number(rooms())))
    }
  }
  return (<div>
    <form onSubmit={handleSubmit}>
      <label>
        How many rooms:
        <input type="text" value={rooms()} onInput={(e) => setRooms(e.currentTarget.value)} />
      </label><br />
      <label>
        How many iterations to test:
        <input type="text" value={iters()} onInput={(e) => setIters(e.currentTarget.value)} />
      </label>
      <button type="submit">Submit</button>
    </form >
    <Show when={results()}>
      <For each={results()?.entries().toArray()}>
        {(res) => <p>
          {res[0]}: {res[1]}
        </p>}
      </For>
    </Show>
  </div >);
}
