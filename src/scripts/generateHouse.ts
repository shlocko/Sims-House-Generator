import { houseObject } from "../App";
import { house, room, roomName, roomNames } from "./types";
import { generateBudget, randomElement, randomInt } from "./utils";

export const generateRoom = (name?: roomName) => {
	let randName: roomName
	if (name) {
		randName = name
	} else {
		randName = randomElement(roomNames)
	}

	return {
		name: randName,
		xDim: randomInt(2, 20),
		yDim: randomInt(2, 20),
		budget: generateBudget(500, 40000)
	}
}

export const generateHouse = (roomCount: number): house => {
	let houseObj: house = {
		rooms: []
	}

	houseObj.rooms.push(generateRoom("bedroom"))
	houseObj.rooms.push(generateRoom("bathroom"))
	houseObj.rooms.push(generateRoom("kitchen"))
	houseObj.rooms.push(generateRoom("living room"))
	for (let i = 0; i < roomCount - 4; i++) {
		houseObj.rooms.push(generateRoom())
	}

	houseObj.rooms.sort((a, b) => a.name.localeCompare(b.name))

	return houseObj
}
