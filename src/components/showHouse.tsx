import { Component, For } from "solid-js"
import { house } from "../scripts/types";

interface HouseProps {
	house: house,
}

const ShowHouse: Component<HouseProps> = (props) => {

	return (
		<div>
			<For each={props.house.rooms}>
				{(room) => <div>
					<p><input type="checkbox" />{room.name}: {room.xDim}x{room.yDim}, ${room.budget}</p>
				</div>}
			</For>

		</div>
	);
};

export default ShowHouse
