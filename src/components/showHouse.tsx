import { Component, createSignal, For } from "solid-js"
import { house } from "../scripts/types";
import { houseObject, setHouseObject } from "../App";

interface HouseProps {
	house: house,
}

const toggle = (id: number) => {
	const index = houseObject.rooms.findIndex(r => r.id === id);
	setHouseObject("rooms", index, "completed", c => !c)
}


export const [totalBudget, setTotalBudget] = createSignal(0);

const ShowHouse: Component<HouseProps> = (props) => {
	setTotalBudget(0)
	houseObject.rooms.forEach((room) => setTotalBudget(totalBudget() + room.budget))
	return (
		<div>
			<p>Total house budget: ${totalBudget().toLocaleString()}</p>
			<For each={props.house.rooms}>
				{(room) => <div>
					<label><p><input type="checkbox" checked={room.completed} onChange={() => toggle(room.id)} />{room.name}: {room.xDim}x{room.yDim}, ${room.budget.toLocaleString()}</p></label>
				</div>}
			</For>


		</div>
	);
};

export default ShowHouse
