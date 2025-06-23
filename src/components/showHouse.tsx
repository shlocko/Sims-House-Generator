import { Component, For } from "solid-js"
import { house } from "../scripts/types";
import { houseObject, setHouseObject } from "../App";

interface HouseProps {
	house: house,
}

const toggle = (id: number) => {
	const index = houseObject.rooms.findIndex(r => r.id === id);
	setHouseObject("rooms", index, "completed", c => !c)
}

const ShowHouse: Component<HouseProps> = (props) => {

	return (
		<div>
			<For each={props.house.rooms}>
				{(room) => <div>
					<p><input type="checkbox" checked={room.completed} onChange={() => toggle(room.id)} />{room.name}: {room.xDim}x{room.yDim}, ${room.budget}</p>
				</div>}
			</For>

		</div>
	);
};

export default ShowHouse
