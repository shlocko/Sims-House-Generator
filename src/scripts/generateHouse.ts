import { houseObject } from "../App";
import { house, room, roomName, roomNames } from "./types";
import { generateBudget, randomElement, randomInt } from "./utils";

export const generateRoom = (id: number, name?: roomName) => {
	let randName: roomName
	if (name) {
		randName = name
	} else {
		randName = randomElement(roomNames)
	}

	return {
		id: id,
		name: randName,
		xDim: randomInt(2, 20),
		yDim: randomInt(2, 20),
		budget: generateBudget(500, 40000),
		completed: false
	}
}

export const generateHouse = (roomCount: number): house => {
	let houseObj: house = {
		rooms: []
	}

	houseObj.rooms.push(generateRoom(1, "bedroom"))
	houseObj.rooms.push(generateRoom(2, "bathroom"))
	houseObj.rooms.push(generateRoom(3, "kitchen"))
	houseObj.rooms.push(generateRoom(4, "living room"))
	for (let i = 0; i < roomCount - 4; i++) {
		houseObj.rooms.push(generateRoom(i + 4))
	}

	houseObj.rooms.sort((a, b) => a.name.localeCompare(b.name))

	return houseObj
}
