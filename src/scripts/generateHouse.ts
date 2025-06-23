import { houseObject } from "../App";
import { roomConfiguration } from "./roomConfig";
import { house, room, roomName, roomNames } from "./types";
import { generateBudget, randomElement, randomInt, roomCount } from "./utils";

export const generateRoom = (rooms: room[], id: number, name?: roomName): room => {
	let randName: roomName
	if (name) {
		randName = name
	} else {
		randName = randomElement(roomNames)
		while (roomCount(rooms, randName) >= roomConfiguration.get(randName)?.maxCount! || Math.random() > (roomConfiguration.get(randName)?.frequencyConstant!) ** (roomCount(rooms, randName) + 1)) {
			randName = randomElement(roomNames)
		}
	}

	return {
		id: id,
		name: randName,
		xDim: randomInt(roomConfiguration.get(randName)?.minDim!, roomConfiguration.get(randName)?.maxDim!),
		yDim: randomInt(roomConfiguration.get(randName)?.minDim!, roomConfiguration.get(randName)?.maxDim!),
		budget: generateBudget(roomConfiguration.get(randName)?.minBudget!, roomConfiguration.get(randName)?.maxBudget!),
		completed: false
	}
}

export const generateHouse = (roomCount: number): house => {
	let houseObj: house = {
		rooms: []
	}
	let id = 0
	let requiredRooms = new Map<roomName, number>()
	roomNames.forEach((rn) => {
		let count = roomConfiguration.get(rn)!.minCount
		for (let i = 0; i < count; i++) {
			houseObj.rooms.push(generateRoom(houseObj.rooms, id, rn))
			id += 1
		}
	})


	for (let i = 0; i < roomCount - 4; i++) {
		houseObj.rooms.push(generateRoom(houseObj.rooms, i + id))
	}

	houseObj.rooms.sort((a, b) => a.name.localeCompare(b.name))


	return houseObj
}
