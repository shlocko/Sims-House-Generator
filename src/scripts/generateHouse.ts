import { houseObject } from "../App";
import { roomConfiguration } from "./roomConfig";
import { house, room, roomName, roomNames } from "./types";
import { generateBudget, generateDimension, minRooms, randomElement, randomInt, roomCount } from "./utils";

export const generateRoom = (rooms: room[], id: number, maxSize: number, name?: roomName): room => {
	let randName: roomName
	if (name) {
		randName = name
	} else {
		randName = randomElement(roomNames)
		while (roomCount(rooms, randName) >= roomConfiguration[randName]?.maxCount! || Math.random() > (roomConfiguration[randName]?.frequencyConstant!) ** (roomCount(rooms, randName) + 1)) {
			randName = randomElement(roomNames)
		}
	}
	roomConfiguration

	return {
		id: id,
		name: randName,
		xDim: generateDimension(roomConfiguration[randName]?.minDim!, Math.min(roomConfiguration[randName]?.maxDim!, maxSize)),
		yDim: generateDimension(roomConfiguration[randName]?.minDim!, Math.min(roomConfiguration[randName]?.maxDim!, maxSize)),
		budget: generateBudget(roomConfiguration[randName]?.minBudget!, roomConfiguration[randName]?.maxBudget!),
		completed: false
	}
}

export const generateHouse = (roomCount: number, maxSize: number): house => {
	let houseObj: house = {
		rooms: []
	}
	let id = 0
	let requiredRooms = new Map<roomName, number>()
	roomNames.forEach((rn) => {
		let count = roomConfiguration[rn]!.minCount
		for (let i = 0; i < count; i++) {
			houseObj.rooms.push(generateRoom(houseObj.rooms, id, maxSize, rn))
			id += 1
		}
	})


	for (let i = 0; i < roomCount - minRooms(); i++) {
		houseObj.rooms.push(generateRoom(houseObj.rooms, i + id, maxSize))
	}

	houseObj.rooms.sort((a, b) => a.name.localeCompare(b.name))


	return houseObj
}
